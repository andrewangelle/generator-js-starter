const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  /*
    Telling webpack to do start its magic 
    at the beginning at /src/index.js
  */
  entry: {
    main: "./src/index.js",
  },
  /*
     declaring that whenever webpack is done,
     put the resulting code in a /dist folder
     inside of a file named bundle.js
  */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  /*
      Telling webpack dev server to serve files from
      /src folder.
      Hot module reloading enabled.
  */
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    hot: true
  },
  /*
    plugins below are related to code splitting
    and importing/exporting single modules 
  */

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
      minChunks: 2
    }),
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      allChunks: true
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
        }) 
  ],
  /*
    Module is single object that will contain
    a all of the different tools/loaders that this
    project's webpack will support in its bundling. 

    rules is an array of objects. Each object
    is an individulal tool"
  */
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 10000 }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
