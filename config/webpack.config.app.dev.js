const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.config.app.common');

module.exports = merge(commonConfig, {
  mode: "development",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "build", "app")
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html"
    })
  ],

  module: {
    rules: [
      /** CSS **/
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },

      /** SASS **/
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
});
