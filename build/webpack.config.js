var rm = require('rimraf')
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.resolve(dir)
}

var webpackConfig = {
  watch: true,
  entry: {
    bundle: resolve('./src/index'),
    // hehe: resolve('./src/hehe'),
    // test: resolve('./src/test'),
    // vendor: [
    //   resolve('./src/global')
    // ]
  },
  output: {
    path: resolve('./dist/'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
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
      new HtmlWebpackPlugin({
        title: 'caonima',
        template: resolve('./index.html'),
      }),
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor', // 指定公共 bundle 的名字。
          minChunks: function(module, count) {
            return module.context && module.context.indexOf('node_modules') !== -1
          }
      })
  ]
}

rm(path.resolve('./dist'), err => {
  webpack(webpackConfig, (err, stats) => {
    console.log(stats.toString())
  })
})