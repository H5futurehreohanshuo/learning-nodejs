const fs = require('fs');

// 删除文件
fs.unlink('./demos/test.txt', err => {
  if (err) throw err;
  console.log('done');
});