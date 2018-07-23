const fs = require('fs');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

// TODO
// const source = fs.readdirSync();

module.exports = async function(req, res, filePath) {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      // 文件
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      // 这样写也可以，但是不推荐，因为 readFile 需要把文件都读完才能执行回调函数，这样 read 的速度的是很慢的
      /* fs.readFile(filePath, (err, data) => {
        res.end(data);
      }); */
      // 推荐用流的方式读取文件
      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      // 文件夹
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      res.end(files.join(','));
    }
  } catch (ex) {
    console.error(ex);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not a directory or file\n ${ex.toString()}`);
  }
}
