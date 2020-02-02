const path = require('path');

module.exports = {
  resolve: {
    alias: {
      app: path.resolve(__dirname, "..", "src", "app"),
      reactron: path.resolve(__dirname, "..", "src", "reactron"),
      main: path.resolve(__dirname, "..", "src", "reactron", "main"),
      renderer: path.resolve(__dirname, "..", "src", "reactron", "renderer"),
      shared: path.resolve(__dirname, "..", "src", "shared")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
}
