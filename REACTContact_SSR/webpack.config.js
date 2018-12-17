const { EnvironmentPlugin } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

const path = require('path');

module.exports = env => {
  return {
          plugins: [
                    new EnvironmentPlugin({ NODE_ENV: env.NODE_ENV, DEBUG: env.DEBUG, APP_CONTEXT: env.APP_CONTEXT, ENV: env.ENV }),
                    new MiniCssExtractPlugin({ filename: "style.[chunkhash].css" }),
                    new Dotenv({ path: path.resolve(__dirname, 'conf', `.env.${env.ENV}`) })
                  ],
            
          resolve: { alias: {bundleAssets: path.join(__dirname, 'build', 'bundle-assets.json')} },

          module: {
                    rules: [
                              {
                                test: /\.(png|jpg|gif|svg)$/,
                                loader: 'file-loader',
                                options: { name: '[hash].[ext]', publicPath: `/${env.APP_CONTEXT}/`}
                              },

                              {
                                test: /\.js?$/,
                                loader: 'babel-loader',
                                exclude: /node_modules/,
                                options: {
                                            presets: ['react', 'stage-0', ['env', { targets: { browsers: ['last 2 versions'] } }]],
                                            plugins: ["transform-object-rest-spread", "transform-class-properties", "transform-async-to-generator"]
                                          }
                              },

                              {
                                test: /\.css$/,
                                use: [
                                        MiniCssExtractPlugin.loader,
                                        { loader: 'css-loader', options: { importLoaders: 1, modules: true, localIdentName: '[local]__[hash:base64:8]'} },
                                        { loader: 'postcss-loader', options: { ident: 'postcss', plugins: [ require('postcss-import'), require('postcss-extend'), require('postcss-icss-values')]}}
                                      ]
                              }

                          ]

                  }

        };

};
