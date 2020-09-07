//1. 引入 express 框架
const express = require("express");
const cookieParser = require("cookie-parser");

//2. 创建服务对象
const app = express();

//3. 设置 cookie 中间件
app.use(cookieParser());

//4. 创建路由规则
app.get('/set-cookie', (request,response)=>{
    //设置cookie  设置响应头信息
    response.cookie('name','xiaohigh', {maxAge: 120*1000});
    response.send('cookie的设置');
});

app.get('/get-cookie', (request, response)=>{
    //获取 cookie, 读取请求头信息
    console.log(request.cookies.name);
    response.send('cookie的读取');
});

app.get('/clear-cookie', (request, response)=>{
    //获取 cookie, 设置响应头信息
    response.clearCookie('name');
    response.send('cookie的清除');
});

//5. 启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动.....");
});