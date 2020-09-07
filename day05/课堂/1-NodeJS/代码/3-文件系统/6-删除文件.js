//删除文件
const fs = require("fs");

//调用方法删除  
fs.unlink('./h5200422.html', err => {
    if(err) throw err;
    console.log("删除成功!!");
});

