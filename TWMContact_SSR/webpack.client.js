const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js')

const config = {

    //Setting the entry point 
    entry: ['babel-polyfill', './src/init/Entry_Client.js'],

    //output file of the bundle.js
    output:{
        path:path.join(__dirname, '/public'),
        filename:'bundle.js'
    }
};


module.exports = env => {
    let mergedConfig = merge(baseConfig(env), config);
    return mergedConfig;
}







