const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,

    output: {
        filename: 'js/[name].js',
        path: path.resolve('./public')
    },

    resolve: {
        extensions: ['.js', '.tsx', '.jsx', '.ts', '.json']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    externals: {
        React: 'react',
        ReactDom: 'react-dom'
    },

    plugins: [isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin()]
};
