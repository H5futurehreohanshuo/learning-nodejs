/**
 * path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起， 并规范化生成的路径。
 * http: //nodejs.cn/api/path.html#path_path_join_paths
 */
const { join } = require('path');

console.log(join('/usr', 'local', 'bin/'));
console.log(join('/usr', 'local', '../bin/'));