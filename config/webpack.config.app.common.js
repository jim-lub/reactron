const path = require('path');

module.exports = {
  entry: {
    main: "./src/app/index.js",
    // vendor: "./src/app/vendor.js"
  },

  module: {
    rules: [
      /** HTML-LOADER **/
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      
      /** FILE-LOADER: SVG, PNG, JPG, GIF **/
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
