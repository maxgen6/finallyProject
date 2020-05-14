const path = require('path');

module.export = {
    entry: {
        main:'./src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist' 
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: '/node_modules',
                test: /\.js$/,
            }
        ]
    }
}