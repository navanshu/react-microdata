const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = ({production}) => {

  return {
    entry: {
      app: "./src/index.tsx",
    },
    target: "web",
    mode: production?"production":"development",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
      ],
    },
    resolve: {
      // omit the file suffix
      extensions: [".ts", ".tsx", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    plugins: [
      new HtmlPlugin({
        template: __dirname + "/public/index.html",
      }),
    ],
  };
};
