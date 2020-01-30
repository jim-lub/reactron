const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/app/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html"
    })
  ],

  module: {
    rules: [

      { // CSS LOADER
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      { // SASS LOADER
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
