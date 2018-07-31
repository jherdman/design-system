const path = require("path");

const basePath = path.join(__dirname, '..');
const srcPath = path.join(basePath, 'src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }, 
          {
            loader: "sass-loader",
            options: {
              includePaths: [srcPath]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", "css-loader"
        ],
      }
    ]
  }
};