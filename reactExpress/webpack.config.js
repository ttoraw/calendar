const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
   entry: {
     main: './src/main.js'
   },
   devServer: {
     proxy: {
          "**": "http://localhost:5000" // express 서버주소
      }
   },
   output: {
      // path: path.join(__dirname, '/build'),//경로로 연결
      path: path.resolve(__dirname, 'build'),//상대적 경로로 연결
      filename: '[name].bundle.js'
   },

   resolve: { extensions: ["*", ".js", ".jsx"] },
   module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
              {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                      hmr: true,
                      reloadAll: true
                  }
              },
              'css-loader',
              'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|svg|gif)/,
          use: [
              'file-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use:{loader: 'babel-loader'}
        }
      ]
   },
   plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-react-start-kit',
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
          }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
