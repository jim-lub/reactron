const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.config.app.common');

module.exports = merge(commonConfig, {
  mode: "development",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "..", "build")
  }
});
