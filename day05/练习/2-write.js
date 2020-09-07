const fs = require("fs");

//
fs.writeFile('D:/200422.html', '无边落木萧萧下，不尽长江滚滚来', err => {
    if(err) throw err;
    console.log("写入成功");
});