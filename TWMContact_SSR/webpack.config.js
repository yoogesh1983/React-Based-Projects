const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

module.exports = env => {

    env = dotenv.config({ path: path.resolve(__dirname, 'conf', `.env.${env.ENV}`) }).parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
      }, {});

    return {
        plugins: [new DefinePlugin(envKeys)],

        //what kind of folders should and should not pickedup by babel loader
        module:{
            rules:[
                {
                    test:/\.js$/,
                    exclude: /node_modules/,
                    loader:'babel-loader',
                    options: {
                        presets: ['react', 'stage-0', ['env', { targets: { browsers: ['last 2 versions']}}]],
                        plugins: ["transform-object-rest-spread", "transform-class-properties"]
                    }
                },
                
                { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
                },

                {
                test: /\.scss$/, 
                loader: "sass-loader" 
                }
            ]
        }

    };
}