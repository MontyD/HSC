const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isBuild = process.env['npm_lifecycle_event'] === 'build';

module.exports = (function() {
    'use strict';

    let config = {};

    config.entry = {
        app: './js/index.js'
    };

    config.output = {

        path: path.resolve(__dirname + '/public'),

        publicPath: '/',

        filename: './javascript/[name].js',

        chunkFilename: './javascript/[name].js'

    };

    config.module = {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules')
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    autoprefixer,
                                    cssnano
                                ];
                            }
                        }
                    },
                    'sass-loader'
                ]
            })
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: 'file-loader'
        }, {
            test: /\.html$/,
            use: 'raw-loader'
        }]
    };

    config.plugins = [
        new ExtractTextPlugin('css/[name].css'),
    ];

    if (isBuild) {
        config.plugins.push(
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin()
        );
    }

    if (!isBuild) {
        config.devtool = 'source-map';
    }

    config.devServer = {
        proxy: {
          '**': 'http://develop'
        }
    };

    return config;
})();
