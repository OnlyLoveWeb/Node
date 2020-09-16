var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {
  var url = req.url;
  if(url === '/plain'){
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hi 你好')
  }else if(url === '/html'){
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<p>hello<a>电我</a></p>')
  }
  
})

server.listen(3000, function() {
  console.log('Server is running')
})