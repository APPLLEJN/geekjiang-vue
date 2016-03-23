import Express from 'express'
var app = Express()
var port = 3050

app.get('/login', function(){
  console.log('login page is here')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
