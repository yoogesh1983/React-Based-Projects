const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js')
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');

const config = {

    //Setting the entry point 
    entry: ['babel-polyfill', './src/init/Entry_Client.js'],

    //output file of the bundle.js
    output:{
        path:path.join(__dirname, '/public'),
        filename:'bundle.js'
    }
};


module.exports = (env) => {

    env = dotenv.config({ path: path.resolve(__dirname, 'conf', `.env.${env.ENV}`) }).parsed;
    let mergedConfig = merge(baseConfig, config);

    const envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {});

    const prod = { plugins: [new DefinePlugin(envKeys)]};
    mergedConfig = merge(mergedConfig, prod);

    return mergedConfig;
  };








