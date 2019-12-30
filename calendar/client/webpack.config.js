const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
   entry: ['@babel/polyfill',"./src/main"],
   output: {
      // path: path.join(__dirname, '/build'),//경로로 연결
      path: path.resolve(__dirname, 'build'),//상대적 경로로 연결
      filename: '[name].bundle.js'
   },
   devServer:{
     inline:true,
     port:8080,
     open: true,
     proxy: [{
       path:"/api/**",
       target:"http://localhost:5000"
     }]
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
          use:{
            loader: 'babel-loader',
            options:{
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        }
      ]
   },
   plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: 'webpack-react-start-kit',
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
          }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
