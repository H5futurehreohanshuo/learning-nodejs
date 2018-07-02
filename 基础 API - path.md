###path 和路径有关的一切

- __dirname、__filename 总是返回文件的绝对路径
- process.cwd() 总是返回执行 node 命令所在文件夹

## ./

- 在```require```方法中总是相对当前文件所在文件夹
- 在其他地方和```process.cwd()``一样，相对 node 启动文件夹