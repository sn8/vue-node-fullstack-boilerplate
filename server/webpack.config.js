const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    modules: ['node_modules']
  }
};