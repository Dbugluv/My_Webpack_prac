const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./config/webpack.config.js');

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  publicPath: config.output.publicPath,
  historyApiFallback: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});