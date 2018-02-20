const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ["./src/index.js", "./dist/styles/main.sass"],
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
                test: /\.sass$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}