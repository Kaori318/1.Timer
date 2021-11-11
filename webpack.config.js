const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            { test: /\.(png|ipe?g|gif|mp3)$/i, 
                use: 'file-loader' 
            },
            {test: /\.(scss)$/i, 
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },

   plugins:[ 
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        //new BundleAnalyzerPlugin()
        ]

}