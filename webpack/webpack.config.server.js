const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: './src/serverRenderer.jsx',
    externals: [nodeExternals()],
    output: {
        filename: 'js/serverRenderer.jsx',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'css-loader/locals'
                ]
            }
        ]
    },
    plugins: [
        !isDevMod && new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ].filter(Boolean)
});
