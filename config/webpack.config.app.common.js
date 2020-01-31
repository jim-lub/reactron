const path = require('path');

module.exports = {
  target: "electron-renderer",
  
  entry: {
    app: "./src/app/index.tsx",
    // vendor: "./src/app/vendor.js"
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
