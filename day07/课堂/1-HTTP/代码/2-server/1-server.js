//1. 引入 HTTP 模块
const http = require("http");// require 函数用来导入模块
//2. 创建服务对象  // create 创建  server 服务
// request 是对请求报文的封装
// response 是对响应报文的封装
const server = http.createServer(function(request, response){


    //调用 response 对象的end方法来设置 『响应体』
    response.end("hello HTTP Server");
});
//3. 启动服务 
// 8000 端口号, 计算机的服务窗口号. 计算机总共有 65536 个端口号 
server.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});
