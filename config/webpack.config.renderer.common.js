const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: "source-map",

  target: "electron-renderer",

  entry: {
    renderer: "./src/internals/renderer/index.tsx",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      },

      {
        test: /\.html$/,
        use: ["html-loader"]
      },

      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: "file-loader",
            options: {
              name: "[hash].[ext]",
              outputPath: "static/images",
              esModule: false,
          }
        }],
      },

      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
            outputPath:  'static/fonts'
          }
        }]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/images",
            esModule: false,
          }
        }
      }
    ]
  }
});
