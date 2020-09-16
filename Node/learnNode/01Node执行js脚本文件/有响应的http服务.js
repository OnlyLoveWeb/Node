var http = require('http')
var server = http.createServer()

// request 请求事件处理函数，需要接收两个参数
// Request请求对象
//  请求对象可以用来获取客户端的一些请求信息,例如:请求路径
// Response 响应对象
//  响应对象可以用来给客户端发送响应消息

server.on('request', (request, response) => {
// response对象有一个方法：write可以用来给客户端发送响应数据
// write可以使用多次，但是最后一次要使用end来结束响应，否则客户端会一直等待
  
  if(request.url ===  '/home'){
    response.write('home');
    response.end('home');
  }
})

server.listen(3000, function() {
  console.log('服务器已经启动了，可以访问http://127.0.0.1:3000')
})