module.exports= {

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
}
