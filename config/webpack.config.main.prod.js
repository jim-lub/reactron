const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.main.common');

module.exports = merge(commonConfig, {
  mode: "production",

  output: {
    filename: "main.js",
    path: path.join(__dirname, "..", "build")
  }
});
