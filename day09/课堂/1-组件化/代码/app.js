//入口文件
//1. require 里传入模块路径
// const m1 = require('./m1.js');

//2. 如果路径没有跟后缀
// const m1 = require("./m1");// JS 后缀
// const m2 = require("./m2");// JSON 后缀

//3. 如果是其他的后缀
// const m3 = require("./other.html");

//4. 如果路径对应的是一个文件夹
// const m4 = require('./libs');

//4-2 
// const m5 = require("./libs-2");

//5. 内置模块与 NPM 安装的模块
// const fs = require("fs");
const lodash = require("lodash");
const moment = require("moment");

console.log(lodash.chunk([1,2,3,4,5,6,9], 2))

