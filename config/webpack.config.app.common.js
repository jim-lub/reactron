const path = require('path');
const config = require('../package.json');
console.log(config.dependencies)
module.exports = {
  devtool: "source-map",

  target: "electron-renderer",

  entry: {
    app: "./src/app/index.tsx"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
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
              "@babel/preset-typescript"
            ]
          }
        }
      },

      {
        test: /\.html$/,
        use: ["html-loader"]
      },

      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/images",
            esModule: false, // temp fix for wrong image src in html file
          }
        }
      }
    ]
  }
}
