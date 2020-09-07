/**
 * GET  /index.html?a=10            ./public/index.html
 * GET  /css/app.css                ./public/css/app.css
 * GET  /css/home.css               ./public/css/home.css
 * GET  /js/app.js                  ./public/js/app.js
 * GET  /images/logo.png            ./public/images/logo.png
 */
// 取样    1 3 5 7 9 

const http = require("http");
const url = require("url");
const fs = require('fs');

const server = http.createServer((request, response) => {
    //获取用户的请求路径
    let path = url.parse(request.url).pathname;
    //拼接文件路径
    let filePath = __dirname + '/public' + path;
    //读取文件内容
    fs.readFile(filePath, (err, data) => {
        //如果出错
        if(err){
            response.statusCode = 500;
            response.end("读取失败");
            return;
        }
        //如果成功
        response.end(data);
    });
});

server.listen(8000);
