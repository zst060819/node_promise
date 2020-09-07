//创建文件 h5200422.html 并写入一段文字 『不要熄灭你的灵感及想象，不要成为你楷模的奴隶』
//1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法
// fs.writeFile('./h5200422.html','不要熄灭你的灵感及想象，不要成为你楷模的奴隶', err => {
//     //判断
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("写入成功");
// });

//3. 标志位 a
// fs.writeFile('./h5200422.html','测试\r\n', {flag: 'a'},err => {
//     //判断
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("写入成功");
// });

//4. writeFileSync 同步写入
fs.writeFileSync('./h5200422.html', '内容\r\n',{flag:'a'});


