var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var bodyParser = require('body-parser')
// default port where dev server listens for incoming traffic
var port = process.env.PORT || 3050
var app = express()
var compiler = webpack(config)
// var mongoose = require('mongoose');
// var uri = 'mongodb://localhost/geekjiangAdmin';
// global.db = mongoose.createConnection(uri);
const db = require('monk')('localhost/geekjiangAdmin')
global.db = db
var routes = require('./routes')

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: true
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
app.use('/static', express.static('./static'))

db.on('error', console.error.bind(console, '连接错误:'))
db.once('open', function () {
  console.log('open db')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/api/login', routes.login)
app.get('/api/article/list', routes.articleList)
app.post('/api/article', routes.article)

app.use('/api', (req, res, next) => {
  res.send({
    result: true,
    data: res.data || {},
    time: Date.now()
  })
})

app.use('/api', (err, req, res, next) => {
  if (!err) {
  } else {
    const statusCode = err.status || err.statusCode
    res.status(statusCode).json({
      result: false,
      error: statusCode,
      reason: err.reason || null,
      time: Date.now()
    })
  }
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
