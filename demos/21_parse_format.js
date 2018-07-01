const { parse, format } = require('path');

const filePath = '/usr/local/bin/node_modules/n/package.json';

/* {
  root: '/',
  dir: '/usr/local/bin/node_modules/n',
  base: 'package.json',
  ext: '.json',
  name: 'package'
} */
/**
 * path.parse() 方法返回一个对象， 对象的属性表示 path 的元素。
 * http: //nodejs.cn/api/path.html#path_path_parse_path
 */
const ret = parse(filePath);

console.log(ret);

console.log(format(ret));
