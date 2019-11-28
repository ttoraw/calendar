const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const webpack = require('webpack');


module.exports = {
  entry: ["./src/index.js",

  'webpack-dev-server/client?http://0.0.0.0:4000',
         'webpack/hot/only-dev-server'
       ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build")
  },
  mode:"development",
  devServer: {
    contentBase: path.resolve(__dirname, "../build"),
    index: "index.html",

    hot: true,
    historyApiFallback: true,
    //port: 9000,
    proxy: {
            "**": "http://localhost:3000"
        },
        stats: {
          // Config for minimal console.log mess.
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ],

  },
  resolve: {
   extensions: [".jsx", ".js"]
 },
  plugins: [
    new HtmlWebPackPlugin({
            template: './public/index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
    }),
    new MiniCssExtractPlugin({
     filename: 'style.css'
     // filename: 'style-test.css'
   }),
    new CleanWebpackPlugin(),

    new webpack.HotModuleReplacementPlugin()

  ]
};
