/**
 * path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
 * http: //nodejs.cn/api/path.html#path_path_resolve_paths
 */
const { resolve } = require('path');

console.log(resolve('./'));