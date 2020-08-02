'use strict';

let path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
             '@babel/plugin-proposal-class-properties',
             '@babel/transform-runtime',
            ]
        }
      }
    },
       {
       test:/\.(s*)css$/,
       use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
       ]
    },
    {
      test: /\.txt$/i,
      use: 'raw-loader',
    }]
 },
 plugins: [
    new miniCss({
       filename: 'style.css',
    }),
 ]
};
