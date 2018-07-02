const buf = Buffer.from('This is a test!');

console.log(buf.length);

const buf2 = Buffer.allocUnsafe(10);
buf2[0] = 2;

// Buffer 的长度
console.log(buf2.length);

// Buffer 转码
console.log(buf.toString('base64'));

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
// fill 用于填充字符
console.log(buf3.fill(10, 2, 6));

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test！');

// 比较两个 buffer 中的内容是否一样
console.log(buf4.equals(buf5));
console.log(buf4.equals(buf6));

// 同数组的 indexOf 方法
console.log(buf4.indexOf('es'));
console.log(buf4.indexOf('esa'));