
// 1、使用require方法加载fs核心模块
var fs = require('fs');
// 2、读取文件
// 第一个参数就是要读取的文件路径；
// 第二个参数是一个回调函数；
fs.readFile('./data/hello.txt', (error, data) => {
  // <Buffer e6 88 91 e6 98 af e6 96 87 e6 a1 a3>
  // 文件中存储的其实都是二进制数据0 1
  // 这是为什么看到的不是0和1呢？原因是二进制转为16进制了
  // 但是 无论是二进制还是16进制，人类都不认识
  // 所以我们可以通过toString方法把其转化为我们能认识的字符
  console.log(data);
  console.log(data.toString());
})