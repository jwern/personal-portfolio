const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: __dirname + "/src/custom/images",
          to: "images",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        // Although we're not using the Asset Module in our production build,
        // we need it for our dev server which uses JS injection of styles
        test: /\.(jpg|svg|png|pdf|gif)$/,
        type: "asset/resource",
      },
      // {
      //   test: /\.html$/,
      //   loader: "html-loader",
      // },
    ],
  },
};
