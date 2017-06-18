const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  /*
	  informing webpack of the location
    of our app's files
	*/
  context: path.resolve(__dirname, "src"),
  /*
	  Telling webpack to do its magic 
	  beginning at /src/index.js

    **single entry point
	*/
  entry: {
    app: ".index.js",
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
    new webpack.NamedModulesPlugin()
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
