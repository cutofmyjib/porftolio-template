var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
    { test: /\.(png|jpg)$/,
      loader: 'file-loader?name=[name].[ext]'
    }
    ]
  }
};


