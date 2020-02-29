const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.config.renderer.common');

module.exports = merge(commonConfig, {
  mode: "development",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "build", "app")
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/internals/renderer/template.html"
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },

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
