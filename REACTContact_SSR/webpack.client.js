const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { DefinePlugin } = require('webpack');

const assetsPluginInstance = new WebpackAssetsManifest({
  output: '../build/bundle-assets.json'
});

const definePluginInstance = new DefinePlugin({ 
  'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV)},
  _CLIENT_: true,
  _SERVER_: false
});

const config = {

  // Setting the entry Point
  entry: { bundle: './src/init/Entry_Client.js'},

  //Optimize with Spliting into a number of chunks
  optimization: { splitChunks: { chunks: 'all' } },

  // Tell webpack where to put the output file that is generated
  output: { path: path.resolve(__dirname, 'public'),  filename: '[name].[chunkhash].js' },

  //Plugins used
  plugins: [ assetsPluginInstance ]
};

module.exports = env => {
  let mergedConfig = merge(baseConfig(env), config);

  //If the environment is Prod
  if (env.NODE_ENV === 'production') {
    const prod = { 
      plugins: [ definePluginInstance ] 
    };
    mergedConfig = merge(mergedConfig, prod);
  }
  
  //If the environment is Dev
  try {
    const assets = require(path.join(__dirname, 'build', 'bundle-assets.json'));

    if (assets['bundle.js'] && (env.NODE_ENV === 'local' || env.NODE_ENV === 'development')) 
    {
      const getVendorFilename = buildAssets => [buildAssets['vendors~bundle.js']];
      const pathsToClean = ['public'];
      const cleanOptions = {
        watch: true,
        exclude: getVendorFilename(assets)
      };
      const dev = {
        plugins: [new CleanWebpackPlugin(pathsToClean, cleanOptions)],
        devtool: 'source-map'
      };
      mergedConfig = merge(mergedConfig, dev);
    }
  } 
  catch (err) 
  {
    console.log('NO bundle-assets.json, retry.');
  }

  //Finally return mergedConfig
  return mergedConfig;
};
