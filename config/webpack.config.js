const path = require('path');

module.exports = {
  resolve: {
    alias: {
      app: path.resolve(__dirname, "..", "src", "app"),
      reactron: path.resolve(__dirname, "..", "src", "reactron", "index.ts"),
      ['@reactron']: path.resolve(__dirname, "..", "src", "reactron"),
      shared: path.resolve(__dirname, "..", "src", "shared")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
}
