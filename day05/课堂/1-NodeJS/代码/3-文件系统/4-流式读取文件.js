//流式读取
//1. 引入模块
const fs = require("fs");

//2. 创建一个读取流
// const rs = fs.createReadStream("./file/诗句.html");
const rs = fs.createReadStream("./file/刻意练习.mp3");

//3. 绑定事件  chunk 块儿
rs.on('data', (chunk) => {
    console.log(chunk.length);// 65536 => 64KB
});