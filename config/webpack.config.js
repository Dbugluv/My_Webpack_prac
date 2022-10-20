const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js',
  ],  // Q：此路径是以那处作相对路径处理的？ A：webpack 在查找相对路径时会以 context 为根目录。默认为启动根目录。
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: 'http://localhost:3000/'
    // publicPath: "/"  // 打包后的相对路径。2021.3.18 Q: "/" 影响打包，"./" 影响本地运行。
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 200000,
    assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
    }
  },
  optimization:{  
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
      minChunks: 1,
      // 表示按需加载文件时，并行请求的最大数目。默认为30。
      maxAsyncRequests: 30,
      // 表示加载入口文件时，并行请求的最大数目。默认为30。
      maxInitialRequests: 30,
      // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
        },
        default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
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
        loaders: ['babel-loader'],
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
  devServer: {
    contentBase: '../dist',  // 告知 dev server，从什么位置查找文件
    port: 9999,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.json'],   // 解析文件时可接受的扩展名
    alias: {
      'SRC': path.join(__dirname, '..', "src"),
      'COMPONENT': path.join(__dirname, '..', 'src/component'),
    }
  },
  devtool: 'inline-source-map', // 可定位出代码错误位置
}