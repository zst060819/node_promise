//使用 express 框架
//1. 引入框架的包
const express = require('express');
const fs = require('fs');
const url = require('url');
//2. 创建服务对象
const app = express();

//3. 创建路由规则
app.get('/get-page', (request, response)=>{
    //读取文件内容
    let body = fs.readFileSync('./1-GET.html');
    //设置响应
    response.end(body); 
});

// GET  /get-server
app.get('/get-server', (request, response)=>{
    //提取 url 参数
    console.log(url.parse(request.url, true).query);
    response.send("Hello AJAX GET");
});

//POST 网页显示
app.get('/post-page', (request, response)=>{
    //读取文件内容
    let body = fs.readFileSync('./2-POST.html');
    //设置响应
    response.end(body);
});

// POST  /get-server
app.post('/post-server', (request, response)=>{
    response.send("Hello AJAX POST");
});

app.get('/cache-page', (request, response)=>{
    //读取文件内容
    let body = fs.readFileSync('./3-IE缓存问题.html');
    //设置响应
    response.end(body);
});

app.get('/cache-server', (request, response)=>{
    // response.send("Hello AJAX CACHE");
    response.send("new Content   abc");
});

/***************JSON ******************/
app.get('/json-page', (request, response)=>{
    //读取文件内容
    let body = fs.readFileSync('./4-JSON.html');
    //设置响应
    response.end(body);
});

app.get('/json-server', (request, response)=>{
    //将 一言.json 文件中的内容响应
    const data = fs.readFileSync('./一言.json');
    //设置响应头
    response.setHeader("content-type",'application/json;charset=utf-8');
    //响应
    response.end(data);
});

app.get('/json-server-2', (request, response)=>{
    //数据
    const data = {
        name:'尚硅谷',
        cities: ['北京','上海','深圳'],
        xueke: ['前端','Java','大数据','云计算']
    };
    //将对象转化为字符串
    let str = JSON.stringify(data);
    response.setHeader("content-type",'application/json;charset=utf-8');
    //响应
    response.end(str);
});

/***************JSON ******************/


//4. 监听端口 启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});

