
const path = require('path');
const merge = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.config.app.common');

module.exports = merge(commonConfig, {
  mode: "production",

  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "..", "build", "app")
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/reactron/renderer/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ],
    splitChunks: {
      name: true,
      automaticNameDelimiter: '.',
      chunks: 'all'
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      /** CSS **/
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },

      /** SASS **/
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
