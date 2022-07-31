const HtmlWepackPlugin = require('html-webpack-plugin'),
      { VueLoaderPlugin } = require('vue-loader'),
      { resolve } = require('path');
      
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  externals: {
    'vue': 'Vue'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWepackPlugin({
      template: resolve(__dirname, 'public/index.html')
    })
  ]
}      