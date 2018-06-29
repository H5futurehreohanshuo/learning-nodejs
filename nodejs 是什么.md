###NodeJs 是什么？

官方：Node.js is a **Javascript runtime** built on Chrome's V8.

- 因为 Node.js 是跑在 V8 上的，所以有一些的浏览器属性无法获得，比如 DOM 和 BOM。

- Node.js 不是一门语言，是一种 Javscript 的一种 runtime，或者说是在 V8 上的表现形式。

官方：Node.js uses an **event-driven**,**non-blocking I/O model**.

##非阻塞 I/O(input/output)

- 阻塞：I/O 时进程休眠等待 I/O 完成后进行下一步
- 非阻塞：I/O 时函数立即返回，进程不等待 I/O 完成

##事件驱动

- I/O 等异步操作结束后的操作

- 观察者模式