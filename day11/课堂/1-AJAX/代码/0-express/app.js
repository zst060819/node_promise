//使用 express 框架
//1. 引入框架的包
const express = require('express');

//2. 创建服务对象
const app = express();

//3. 创建路由规则
app.get('/', (request, response)=>{
    //设置响应
    response.end('Hello Express');
});

app.get('/home', (request, response)=>{
    // response.setHeader("content-type",'text/html;charset=utf-8');
    response.send('这里是首页!!');
});

//4. 监听端口 启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});

