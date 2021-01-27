const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ // 会生成自己的 index.html 文件
      title: "HalfMoon's Webpack."
    }),
    new webpack.HotModuleReplacementPlugin(), // 似乎加不加影响不大？
  ],
  module: {
    rules: [    // loader 引入载入
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',  // 告知 dev server，从什么位置查找文件
    port: 8080,
    hot: true
  },
  devtool: 'inline-source-map', // 可定位出代码错误位置
}