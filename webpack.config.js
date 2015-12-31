var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './entry.jsx',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },

  module: {
    loaders: [
      { test: /\.js|jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};