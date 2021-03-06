var users = db.get('users')
var article = db.get('article')

exports.login = function (req, res, next) {
  users.findOne({username: req.body.userName}, function(err, docs) {
    if (docs && docs.password && (docs.password === +req.body.passWord)) {
      next()
      return
    }
    next({reason: '出错啦！', status: 404})
    return
  })
}

exports.article = function (req, res, next) {
  article.insert({article: req.body.article, title: req.body.title, ctime: new Date()}, function(err, docs) {
    if (docs.article === req.body.article) {
      next()
      return
    }
    next({reason: '出错啦！', status: 404})
    return
  })
}

exports.articleList = function (req, res, next) {
  article.find({}, function(err, docs) {
    if (err) {
      next({reason: '出错啦！', status: 404})
      return
    } else {
      res.send(docs)
      return
    }
  })
}


// exports.login = function(req, res, next) {
//   loginModel.findOne({user: req.query.userName}, function(err, docs) {
//     if (err) return next(err);
//     res.send(doc);
//   })
// };
