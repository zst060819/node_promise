//  h5200422.html 移动到 file/200422.html
//1. 引入 fs 模块
const fs = require("fs");

//2. 调用方法
fs.rename("./h5200422.html", "./file/200422.html", err => {
    if(err) throw err;
    console.log("移动成功");
});

// fs.renameSync("./file/200422.html", "./h5200422.html");