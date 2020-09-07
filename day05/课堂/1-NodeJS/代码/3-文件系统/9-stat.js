// 查看文件状态
const fs = require("fs");

fs.stat("./file", (err, stats) => {
    if(err) throw err;
    //判断目标路径是否为文件夹
    console.log(stats.isDirectory());// is 是  Directory 文件夹
    //判断目标路径是否为文件
    console.log(stats.isFile());
});

