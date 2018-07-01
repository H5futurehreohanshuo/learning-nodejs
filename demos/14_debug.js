/* 执行命令 node --inspect-brk
inspect 的意思是开启调试，brk 的意思是从第一行代码开始暂时执行，可以手动一行一行的执行代码 */

function test1() {
  const a = parseInt((Math.random()) * 10);
  const b = parseInt((Math.random()) * 10);

  const c = test2(a, b);
}

function test2(a, b) {
  if (a > b) {
    a += a * 2;
  } else {
    b -= a;
  }

  return a + b;
}

test1();