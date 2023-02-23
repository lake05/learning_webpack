const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BoundlesizeWebpackPlugin = require("./bundlesize-webpack-plugin");

const config = {
  mode: "none",
  entry: {
    main: "./src/index.js",
    // vendor: './src/module1.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new BoundlesizeWebpackPlugin({ sizeLimit: 3 }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.md$/,
        use: [
          {
            loader: "./makedown-loader.js",
          },
          {
            loader: "./md-html-loader.js",
            options: {
              headerIds: false,
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
