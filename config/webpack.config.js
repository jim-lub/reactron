const path = require('path');

module.exports = {
  resolve: {
    alias: {
      ['reactron']: path.resolve(__dirname, "..", "src", "reactron", "index.ts"),
      ['@clients']: path.resolve(__dirname, "..", "src", "reactron", "clients"),
      ['@components']: path.resolve(__dirname, "..", "src", "reactron", "components"),
      ['@constants']: path.resolve(__dirname, "..", "src", "reactron", "constants"),
      ['@lib']: path.resolve(__dirname, "..", "src", "reactron", "lib"),
      ['@main']: path.resolve(__dirname, "..", "src", "reactron", "main"),
      ['@renderer']: path.resolve(__dirname, "..", "src", "reactron", "renderer"),
      ['@state']: path.resolve(__dirname, "..", "src", "reactron", "state"),

      ['~types']: path.resolve(__dirname, "..", "src", "shared", "types"),
      ['shared']: path.resolve(__dirname, "..", "src", "shared"),
      ['windows']: path.resolve(__dirname, "..", "src", "windows")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
}
