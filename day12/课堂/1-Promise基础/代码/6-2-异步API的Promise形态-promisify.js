//util 模块 promisify 
//了解
const fs = require('fs');
const util = require("util");

//调用方法 返回一个新的函数, 新函数执行完毕返回的是一个 promise 对象
const mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/2.html').then(value=>{
    console.log(value.toString());
});
