const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'webpack-dev-server/client?http://0.0.0.0:5000', // WebpackDevServer host and port
    './src/index.js'
  ],  // 2020/2/2 Q：此路径是以那处作相对路径处理的？
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 似乎加不加影响不大？ A：hot为 true时，webpack默认加载此插件。
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ // 会生成自己的 index.html 文件
      title: "HalfMoon's Webpack.",
      template: 'index.html', //html模板
      inject: true, // true：默认值，script标签位于html文件的 body 底部
    }),
  ],
  module: {
    rules: [    // loader 引入载入
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],  // react-hot-loader/webpack 似乎作用在此无效，仅在 .babelrc内有效
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      }
    ]
  },
  // devServer: {
  //   contentBase: '../dist',  // 告知 dev server，从什么位置查找文件
  //   port: 8080,
  //   hot: true
  // },
  resolve: {
    extensions: ['.js', '.json'],   // 解析文件时可接受的扩展名
    alias: {
      'SRC': path.join(__dirname, '..', "src")
    }
  },
  devtool: 'inline-source-map', // 可定位出代码错误位置
}