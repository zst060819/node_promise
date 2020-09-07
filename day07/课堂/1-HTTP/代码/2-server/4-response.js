//设置响应
//1. 引入 HTTP 模块
const http = require("http");// require 函数用来导入模块
//2. 创建服务对象
const server = http.createServer(function(request, response){
    //设置响应状态码 必须是 3 位数.  1xx 2xx  3xx 4xx 5xx
    response.statusCode = 999;
    //响应状态字符串
    response.statusMessage = "Houhou";
    //设置响应头
    response.setHeader('name','atguigu');// set 设置 header头
    response.setHeader("Content-type", "text/html;charset=utf-8");// 设置响应体的类型
    //设置响应体 write 可写流 response对象是一个可写流对象
    // response.write('我也可以设置响应体哦!!<br>');
    response.end('哈喽干啥呢, 煎饼果子管够吗??');
});
//3. 启动服务  65535
server.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});
