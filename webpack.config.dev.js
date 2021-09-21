const path = require('path');
const webpack = require('webpack');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT, 10) || 3005;

module.exports = merge(common,{
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port,
    host,
    historyApiFallback: true,
    open: true,
  },
});
