var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    //https://github.com/petehunt/webpack-howto
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    // { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    //   loader: 'url-loader?limit=100000'
    // }
    {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader?name=[name].[ext]'
    }
    ]
  }
};
