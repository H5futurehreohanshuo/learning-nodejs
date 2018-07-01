/**
 * path.normalize() 方法会规范化给定的 path，并解析 '..' 和 '.' 片段。
 * http: //nodejs.cn/api/path.html#path_path_normalize_path
 */
const { normalize } = require('path');

console.log(normalize('/usr//local/../bin'));
