const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProduction = process.env.NODE_ENV == 'production'

// plugins to run in production
const prodPlugins = [
  // serve HTML file
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),

  // extract CSS to file at build
  new MiniCssExtractPlugin({
    filename: './assets/app.css',
    chunkFilename: '[id].css'
  }),

  // copy static files
  new CopyWebpackPlugin({
    patterns: [
      { from: './src/assets', to: 'assets' },
      { from: './src/public', to: '.' }
    ]
  })
]

// plugins to run during development
const devPlugins = [
  // serve HTML file
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),

  // extract CSS to file at build
  new MiniCssExtractPlugin({
    filename: './assets/app.css',
    chunkFilename: '[id].css'
  }),

  // enable HMR
  new webpack.HotModuleReplacementPlugin(),

  // copy static files
  new CopyWebpackPlugin({
    patterns: [
      { from: './src/assets', to: 'assets' },
      { from: './src/public', to: '.' }
    ]
  })

  // analyze webpack bundle
  // new BundleAnalyzerPlugin()
]

const config = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
    clean: true
  },
  devServer: {
    host: 'localhost',
    port: 8888,
    watchFiles: path.join(__dirname, 'src')
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: isProduction ? prodPlugins : devPlugins
}

module.exports = () => {
  if (isProduction) {
    console.log('Building production bundle...')
    config.mode = 'production'
  } else {
    console.log('Building development bundle...')
    config.mode = 'development'
  }
  return config
}
