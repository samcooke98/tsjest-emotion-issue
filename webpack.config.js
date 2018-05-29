const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["./src/index"],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "client.bundle.js"
  },
  devtool: "cheap-module-source-map",
  // hot: true,
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(\/__tests__\/.*|(\\.|\/)(test|spec))\\.(jsx?|tsx)?/,
        use: [
          {
            loader: "babel-loader",
            options: {}
          },
          {
            loader: "ts-loader", // (or awesome-typescript-loader)
            options: {
              //Transpile Only as the Server will build
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()]
};
