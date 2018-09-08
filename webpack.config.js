const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isBuild = process.env['npm_lifecycle_event'] === 'build';

module.exports = (function() {
    'use strict';

    let config = {};

    config.mode = isBuild ? 'production' : 'development';

    config.entry = {
        app: './ts/index.ts',
        home: './ts/home.ts',
        talks: './ts/talks.ts'
    };

    config.output = {

        path: path.resolve(__dirname + '/public'),

        filename: './javascript/[name].js',

        chunkFilename: './javascript/[name].js',

        publicPath: '/'

    };

    config.resolve = {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    config.module = {
        rules: [{
            test: /\.ts(x)?$/,
            loader: 'awesome-typescript-loader',
            options: {
                configFile: 'tslint.json',
                fix: true
             }
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
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
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: 'file-loader'
        }, {
            test: /\.html$/,
            use: 'raw-loader'
        }]
    };

    config.plugins = [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ];

    if (isBuild) {
        config.plugins.push(
            new webpack.NoEmitOnErrorsPlugin(),
        );
        config.optimization = {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        mangle: true,
                        ecma: 5,
                        toplevel: true,
                        minify: {},
                    }
                })
            ]
        }
    }

    if (!isBuild) {
        config.devtool = 'source-map';
    }

    config.devServer = {
        publicPath: '/',
        proxy: {
          '**': {
            target: {
                host: 'develop',
                protocol: 'http:',
                port: 80
              },
              secure: false
          }
        },
    };

    return config;
})();
