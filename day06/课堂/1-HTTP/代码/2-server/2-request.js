//1. 引入 HTTP 模块
const http = require("http");// require 函数用来导入模块
//内置模块 url
const url = require('url');
//2. 创建服务对象
const server = http.createServer(function(request, response){
    //请求行  GET www.xiaohigh.com/index.html HTTP/1.1
    //请求方法的获取
    // console.log(request.method);
    //获取请求的url  这里只得到 URL 的路径部分
    // console.log(request.url);
    // console.log(url.parse(request.url,true));
    //路径
    console.log(url.parse(request.url,true).pathname);
    //查询字符串 => 对象
    console.log(url.parse(request.url,true).query);
    //协议版本
    // console.log(request.httpVersion);
    //获取请求头
    // console.log(request.headers);
    
    response.end("hello HTTP Server");
});
//3. 启动服务 
server.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});
