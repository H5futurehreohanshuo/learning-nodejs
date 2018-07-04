const fs = require('fs');

fs.watch('./demos', {
  recursive: true, // 是否递归地监视子文件夹
}, (eventType, filename) => {
  console.log(eventType);
  console.log(filename);
});