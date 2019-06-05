const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: ''
    },
    mode: 'development',
    devtool: 'cheap-source-map',
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            '@': path.join(__dirname, '../src')
        }
    },
    devServer: {
        clientLogLevel: 'warning',
        compress: true,
        host: '0.0.0.0',
        port: 2228,
        hot: true,
        open: 'chrome',
        proxy: {},
        disableHostCheck: true,
        publicPath: '/',
        overlay: {
            warnings: false,
            errors: true
        },
        watchOptions: {
            poll: true
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    process.env.config_env !== 'prod' ? 'vue-style-loader' : MiniCssExtraPlugin,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.config_env !== 'prod' ? 'vue-style-loader' : MiniCssExtraPlugin,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                options: {
                    presets: ['env']
                }

            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo:[/\.vue$/]//如果是vue文件内写ts，需要加，但是不推荐，最好是ts与vue分开，在vue文件中引入
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/' + process.env.config_env + '.env')
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: 'index.html',
            inject: true,
            title: 'vue-typescript',
            minify: {}
        }),
        new MiniCssExtraPlugin({
            filename: 'static/css/[name],[hash:8].css',
            chunkFilename: 'static/css/[id].[hash:8].css'
        }),
        new VueLoaderPlugin()
    ]
}