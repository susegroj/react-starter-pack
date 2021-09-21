/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');


const CopyWebpackPlugin = require('copy-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common');


module.exports = merge(common,{
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/icon.png', to: 'assets' },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
