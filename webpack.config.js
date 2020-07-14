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
       test:/\.(s*)css$/,
       use: [ 
          miniCss.loader,
          'css-loader',
          {
            loader: 'resolve-url-loader',
            options: {
              root: path.join(__dirname, 'src')
            }
          },
          'sass-loader',
       ]
    },
    { 
      test: /\.(png|jpg|gif)$/,
      use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[path][name].[ext]',
                  context: path.resolve(__dirname, "src/"),
                  outputPath: '',
                  publicPath: './',
                  useRelativePaths: true
              }
          }
      ] 
  }
   ]
 },
 plugins: [
    new miniCss({
       filename: 'style.css',
    }),
 ]
};
