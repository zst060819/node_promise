/**
 * GET /index.html  public/index.html
 * 
 * index.html 文件中的内容
 * link
 * script 
 * 
 */
const http = require("http");
const url = require("url");
const fs = require('fs');

const server = http.createServer((request, response) => {
    //获取用户的请求路径
    let path = url.parse(request.url).pathname;
    //拼接文件路径
    let filePath = __dirname + '/public' + path;

    if (path === '/page/index.html') {
        fs.readFile(__dirname + '/public/index.html', (err, data) => {
            //如果出错
            if (err) {
                //响应
                response.statusCode = 500;
                response.end('服务器错误');
                return;
            }
            //如果没有出错
            //设置响应头
            response.setHeader("content-type", 'text/html;charset=utf-8');
            response.end(data);
        });
    } else {
        //读取文件内容
        fs.readFile(filePath, (err, data) => {
            //如果出错
            if (err) {
                response.statusCode = 500;
                response.end("读取失败");
                return;
            }
            //如果成功
            response.end(data);
        });
    }
    
});

server.listen(8000);