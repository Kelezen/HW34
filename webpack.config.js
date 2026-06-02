const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },

  module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    
    {
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/i,
        type: "asset/resource"
    },

    {
      test: /\.(ttf|woff|woff2|eot|otf)$/i,
      type: "asset/resource"
    }
  ]
},
    plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  })
]
};