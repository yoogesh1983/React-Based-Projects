const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {

    //Inform webpack that we're building a bundle for NodeJs, raher then for the browser
    target: 'node',

    //Setting the entry point 
      entry: ['babel-polyfill', './src/init/Entry_Server.js'],
      

    //output file of the bundle.js
    output:{
        path:path.join(__dirname, '/build'),
        filename:'bundle.js'
    },

    //exclude all imports which are inside node_modules since those are not required for server side webpack (it is to improve the performance)
    externals: [webpackNodeExternals()]
};

module.exports = env => merge(baseConfig(env), config);
