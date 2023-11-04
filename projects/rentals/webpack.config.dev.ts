// @ts-ignore
const { merge } = require('webpack-merge');
// @ts-ignore
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});
