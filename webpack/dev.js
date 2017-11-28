const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');
const join = require('path').join;
const HtmlPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080'
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        hot: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: join(__dirname, '..', 'src', 'index.html')
        })
    ]
});
