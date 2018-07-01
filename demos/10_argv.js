/**
 * arav
 * arav0
 * execArgv
 * execPath
 */

const { argv, argv0, execArgv, execPath } = process;

// argv 是一个数组，第一个元素是启动的命令，第二个元素是文件的全路径，后面一些元素可以拿到启动命令里面输入的一些参数
argv.forEach(item => {
  console.log(item);
});

// 不太常用
console.log(argv0);

// 获取 node 里面的命令，例如node --inspect  10_argv.js --test a=1 b=2，拿到的 execArgv 就是[ '--inspect' ]
console.log(execArgv);

// node 的路径
console.log(execPath);