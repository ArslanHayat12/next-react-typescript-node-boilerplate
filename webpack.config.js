const path = require("path");

module.exports = {
  name: "deployment",
  mode: "production",
  entry: "./src/app.ts",
  target: "node",
  devtool: "hidden-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    usedExports: true
  }
};
