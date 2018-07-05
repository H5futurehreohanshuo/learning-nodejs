const fs = require('fs');

// stream 流，读文件的时候是一点一点读取，一点一点消费，而不是直接向 readdir 那样全部放到内存中
const rs = fs.createReadStream('./demos/41_readstream.js');

rs.pipe(process.stdout);