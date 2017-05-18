var rm = require('rimraf')
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.resolve(dir)
}

var webpackConfig = {
  watch: false,
  entry: {
    bundle: resolve('./src/index.js'),
    // vendor: [
    //   resolve('./src/test.js')
    // ]
  },
  output: {
    path: resolve('./dist/'),
    filename: '[name].js',
    chunkFilename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor' // 指定公共 bundle 的名字。
      })
  ]
}

rm(path.resolve('./dist'), err => {
  webpack(webpackConfig, (err, stats) => {
    console.log(stats.toString())
  })
})