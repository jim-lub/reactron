const path = require('path');

module.exports = {
  devtool: "source-map",

  target: "electron-renderer",

  entry: {
    app: "./src/app/index.ts",
    renderer: "./src/internals/renderer/index.tsx",
  },

  resolve: {
    alias: {
      app: path.resolve(__dirname, "..", "src", "app"),
      internals: path.resolve(__dirname, "..", "src", "internals"),
      shared: path.resolve(__dirname, "..", "src", "shared")
    },
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
