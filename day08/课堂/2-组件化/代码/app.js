//引入
// fs 模块中对文件操作需要使用绝对路径
//这里的路径使用相对路径
const fn = require('./m1.js');// 不能省略 ./

//引入 m2.js
const fn2 = require("./m2.js");

//引入 m3.js
const fn3 = require("./m3.js");

console.log(fn3);