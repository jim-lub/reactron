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
      template: "./src/reactron/renderer/template.html"
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
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
});
