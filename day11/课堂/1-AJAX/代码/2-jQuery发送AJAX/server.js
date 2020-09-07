//使用 express 框架
//1. 引入框架的包
const express = require('express');
const fs = require('fs');
//2. 创建服务对象
const app = express();

//3. 创建路由规则
app.get('/jquery-page', (request, response)=>{
    //设置响应
    const body = fs.readFileSync('./client.html');
    response.end(body);
});

//all 单词所有, 匹配所有类型的请求
app.all('/jquery-server', (request, response)=>{
    //设置响应
    response.end('Hello Express');
});


//4. 监听端口 启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});

