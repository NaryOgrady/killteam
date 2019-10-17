const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const autoprefixer = require('autoprefixer');

const title = 'Master Tools';
const outDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const baseUrl = '/';

const cssRules = [
  { loader: 'css-loader' },
  {
    loader: 'postcss-loader',
    options: { plugins: () => [autoprefixer({ browserList: ['defaults'] })] }
  }
];

module.exports = function webpackConfig(server) {
  return {
    mode: 'development',
    resolve: {
      extensions: ['.js'],
      modules: [srcDir, 'node_modules']
    },
    entry: {
      app: ['aurelia-bootstrapper'],
      vendor: ['bluebird', 'materialize-css']
    },
    output: {
      path: outDir,
      publicPath: baseUrl,
      filename: '[name].[hash].bundle.js',
      sourceMapFilename: '[name].[hash].bundle.map',
      chunkFilename: '[name].[hash].chunk.js'
    },
    devServer: {
      contentBase: outDir,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },
        {
          test: /\.scss$/i,
          use: ['style-loader', ...cssRules, 'sass-loader']
        },
        {
          test: /\.js$/i,
          loader: 'babel-loader',
          exclude: nodeModulesDir
        }
      ]
    },
    plugins: [
      new AureliaPlugin(),
      new ProvidePlugin({
        Promise: 'bluebird',
        $: 'jquery'
      }),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        metadata: {
          title, server, baseUrl
        }
      })
    ]
  };
};
