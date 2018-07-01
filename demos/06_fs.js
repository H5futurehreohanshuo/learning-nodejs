const fs = require('fs');

// fs 模块读取文件的相对路径是以启动 server.js 的位置为基准的，而不是以 server.js 文件的位置。
const result = fs.readFile('demos/06_fs.js', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

console.log(result);