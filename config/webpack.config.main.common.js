const path = require('path');

module.exports = {
  target: "electron-main",

  entry: {
    app: path.resolve(__dirname, "..", "src", "internals", "main", "index.ts")
  },

  node: {
    __dirname: false
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
              "@babel/preset-typescript"
            ]
          }
        }
      }
    ]
  }
}
