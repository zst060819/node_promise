//复制文件 刻意练习.mp3
const fs = require("fs");

//创建两个流对象
const ws = fs.createWriteStream('./file/法宝.mp3');
const rs = fs.createReadStream("./file/刻意练习.mp3");

//绑定事件 键盘膜  
// rs.on('data', chunk => {
//     ws.write(chunk);
// });

//pipe 方法
rs.pipe(ws);