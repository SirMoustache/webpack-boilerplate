const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new UglifyJSPlugin()
];

module.exports = merge(common, {
  plugins: plugins,
  mode: 'production'
});
