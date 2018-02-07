const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        // publicPath: "assets"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    }
}