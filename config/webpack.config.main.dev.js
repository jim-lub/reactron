const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.main.common');

module.exports = merge(commonConfig, {
  mode: "development",

  output: {
    filename: "main.dev.js",
    path: path.join(__dirname, "..", "build")
  }
});
