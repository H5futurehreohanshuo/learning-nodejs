const fs = require('fs');

// 必须要写回调函数，不写会报错
fs.rmdir('./demos/test', err => {});
