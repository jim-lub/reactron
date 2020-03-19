const path = require('path');

module.exports = {
  resolve: {
    alias: {
      ['reactron']: path.resolve(__dirname, "..", "src", "internals", "index.ts"),
      ['@assets']: path.resolve(__dirname, "..", "src", "internals", "assets"),
      ['@clients']: path.resolve(__dirname, "..", "src", "internals", "clients"),
      ['@components']: path.resolve(__dirname, "..", "src", "internals", "components"),
      ['@constants']: path.resolve(__dirname, "..", "src", "internals", "constants"),
      ['@lib']: path.resolve(__dirname, "..", "src", "internals", "lib"),
      ['@main']: path.resolve(__dirname, "..", "src", "internals", "main"),
      ['@renderer']: path.resolve(__dirname, "..", "src", "internals", "renderer"),
      ['@state']: path.resolve(__dirname, "..", "src", "internals", "state"),
      ['~types']: path.resolve(__dirname, "..", "src", "internals", "types"),

      ['shared']: path.resolve(__dirname, "..", "src", "shared"),
      ['containers']: path.resolve(__dirname, "..", "src", "containers")
    },

    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
}
