global.Promise         = require('bluebird');

var webpack            = require('webpack');
var path               = require('path');

const plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    root:               path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js', '.jsx']
  },
  plugins,
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: [/node_modules/, /public/] }
    ]
  },
  devtool: 'source-map',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};


