var webpack = require('webpack');
var fs = require('fs');
const path = require('path');
const libraryName = 'routemamba';
const outputFile = `${libraryName}.min.js`;
module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.ts?$/, loader: 'ts-loader' }],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 3000,
    host: 'localhost',
  },
};
