const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
   ['dev.react-table']: ['webpack/hot/dev-server', './src/app'],
   ['react-table']: ['./src/index']
  },
  output: {
    library: 'Table',
    libraryTarget: 'umd',
    path: './',
    filename: 'dist/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=images/[name]-[hash:6].[ext]'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap')
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', './src', './stylesheets'],
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },

  plugins: [
    new ExtractTextPlugin('dist/[name].css', {allChunks: true})
  ],

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  }
};