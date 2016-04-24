var users = db.get('user');

exports.login = function(req, res, next) {
  users.findOne({user: req.body.userName}, function(err, docs){
    //if (err) throw err
    if (docs && docs.password && (docs.password === req.body.passWord)) {
      next()
      return
    }
    next({reason: '出错啦！', status: 333})
    return
  })
}
// exports.login = function(req, res, next) {
//   loginModel.findOne({user: req.query.userName}, function(err, docs) {
//     if (err) return next(err);
//     res.send(doc);
//   })
// };
