//1. 引入 fs 模块
const fs = require('fs');

//2. 读取文件内容
// fs.readFile('./file/诗句.html', (err, data)=>{
//     if(err) throw err;
//     //data 为文件中的内容
//     console.log(data.toString());
// });

fs.readFile("C:/test/1.html", (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
});