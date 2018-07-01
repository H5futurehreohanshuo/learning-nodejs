const { basename, dirname, extname } = require('path');

const filePath = '/usr/local/bin/no.txt';

console.log(basename(filePath)); // 文件名
console.log(dirname(filePath)); // 文件的路径
console.log(extname(filePath)); // 文件的扩展名