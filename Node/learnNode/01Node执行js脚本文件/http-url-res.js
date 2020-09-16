var http = require('http');

// 创建server
var server = http.createServer();

// 监听request请求事件，设置请求处理函数

server.on('request', function(request, response) {
  // console.log('收到请求');
  // response.write('hello');
  // response.write('world');
  // response.end();
  // 上面的方式比较麻烦，推荐使用更简单的方式，直接end的同时发送数据
  // response.end('hello node.js');
  // 根据不同的请求路径发送不同的响应结果
  // 1、获取请求路径
  //    request.url获取到的是端口号之后的那一部分路径
  // 2、判断路径处理响应
  var url = request.url;
  if(url === '/') {
    response.end('index page');
  }else if(url === '/login'){
    response.end('login page');
  }else {
    response.end('404 Not Found');
  }
})

// 绑定端口号，启动服务

server.listen(80, function() {
  console.log('服务器启动成功')
})