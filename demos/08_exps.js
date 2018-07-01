// const exports = module.exports;

/* (
  function(exports, require, module, __filename, __dirname) {
    // code
  }
); */

// exports.test = 100;

// exports 是 module.exports 的快捷方式

// module.exports 和 exports 的区别就在于 exports 是 modules.exports 的快捷方式，也就是 exports 是指向 modules 的属性，所以按下面的赋值方式将 exports 用字面量的方式赋值之后，也就切断了 exports 和 module 的关系，这两者也就没有任何关系，这个外面的模块也就拿不到 exports 了。
// 这种字面量赋值的情况就必须要用 module.exports 来赋值了
/* exports = {
  a: 1,
  b: 2,
  test: 100
}; */

module.exports = {
  a: 1,
  b: 2,
  test: 100
};