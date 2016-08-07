var autoprefixer = require('autoprefixer')
var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var cssLoaders = require('./css-loaders')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: './static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.scss'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
                'style-loader', 'css-loader?sourceMap!sass-loader!cssnext-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
            'style-loader', 'css-loader?sourceMap!cssnext-loader')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-runtime']
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  vue: {
    loaders: cssLoaders()
  }
}
