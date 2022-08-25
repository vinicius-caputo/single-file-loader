const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' 
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    module:{
        
        rules:[
            {
                test: /\.js$/,
                use:  'my-loader',
              
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                     'css-loader',
                    'sass-loader'
                ]
            },
           
        ]
    }
}