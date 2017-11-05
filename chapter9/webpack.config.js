var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
var cleanWebpackPlugin = require("clean-webpack-plugin");

var path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[chunkhash:4].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html",
      title: "chapter 9",
      inject: "body"
    }),
    new cleanWebpackPlugin(["./dist"], {
      root: __dirname
    })
  ],
  "devServer": {
    "contentBase": "./dist",
    inline: true
  },
  devtool: "source-map"
}