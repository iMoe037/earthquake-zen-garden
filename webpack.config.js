const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.join(__dirname, "src/index.js"),
  },
  output: {
    path: path.join(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  devtool: "source-map",
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
};
