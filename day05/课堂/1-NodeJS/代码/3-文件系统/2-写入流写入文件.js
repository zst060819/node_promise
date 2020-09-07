//1. 引入 fs 模块
const fs = require('fs'); // require 是一个函数, 'fs' 是字符串参数

//2. 创建写入流对象
const ws = fs.createWriteStream("./file/诗句.html");

//可选事件绑定 打开
ws.on('open', function(){
    console.log('可写流打开了!!');
});

ws.on('close', function(){
    console.log('可写流关闭了!!');
});

//3. 调用方法完成写入
ws.write('  观书有感\r\n');
ws.write('       --朱熹\r\n');
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');

//4. 关闭
ws.close();

