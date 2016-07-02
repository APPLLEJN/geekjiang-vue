var users = db.get('users')

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
// exports.login = function(req, res, next) {
//   loginModel.findOne({user: req.query.userName}, function(err, docs) {
//     if (err) return next(err);
//     res.send(doc);
//   })
// };
