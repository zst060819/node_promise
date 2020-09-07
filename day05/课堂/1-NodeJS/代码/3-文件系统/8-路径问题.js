//创建文件 h5200422.html 并写入一段文字 『不要熄灭你的灵感及想象，不要成为你楷模的奴隶』
//1. 引入 fs 模块
const fs = require('fs');

// __dirname 是一个特殊的变量, 当前文件所在文件夹的绝对路径
// console.log(__dirname);

//fs 模块方法中的路径, 相对路径的参照, 参照的是执行命令时, 所在命令行下的工作目录
fs.writeFileSync(__dirname + '/h5200422.html', '内容\r\n',{flag:'a'});

//

