/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const OUT_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
  ],
  entry: {
    index: path.resolve(SRC_DIR, 'index.js'),
  },
  target: 'node',
  mode: 'production',
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
  },
  output: {
    path: OUT_DIR,
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
  },
};

