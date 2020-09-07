//启动一个服务, 监听端口 9000, 响应结果 "hello H5200422!!加油 fighting!!"
//任何人都可以访问
let port = 9000;
const http = require("http");
const url = require('url');
const fs = require("fs");

const server = http.createServer((request, response) => {
    //响应设置 "" ''      http://h5gcj.utools.club/s?wd=情人节
    //  x.utools.club/index.html  将返回的是当前文件夹下 public 目录中的 index.html
    //获取你请求的 url 的路径
    let pathname = decodeURI(url.parse(request.url).pathname);
    //判断路径是否为 /
    if (pathname === '/') {
        //默认打开文件
        pathname = '/index.html';
    }
    //文件路径拼接
    let filePath = __dirname + '/public' + pathname;
    //文件  文件夹
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log(filePath);
            console.log(err);
            //返回 500 错误
            response.statusCode = 500;
            response.end('<h1>Server Internal Error</h1>')
            return;
        }
        //判断类型 文件夹
        if (stats.isDirectory()) {
            //读取文件夹
            fs.readdir(filePath, (err, data)=>{
                if(err){
                    //返回 500 错误
                    response.statusCode = 500;
                    response.end('<h1>Server Internal Error</h1>')
                    return;
                }
                // data 为文件夹中的文件列表数组  ['app.css', 'home.css']
                let str = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>文件列表</title>
                </head>
                <body>
                    <h1>文件列表</h1>
                    <ul>`;
                //遍历数组
                data.forEach(item => {
                    str += `<li>${item}</li>`;
                });
                str += `</ul>
                </body>
                </html>`;
                //响应
                response.end(str);
            });
        } else {
            //文件的情况, 读取文件的内容
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    response.statusCode = 404;
                    response.end('<h1>Not Found</h1>')
                    return;
                }
                response.end(data);
            });
        }
    });

});

server.listen(port, () => {
    console.log(`服务已经启动, 端口号 ${port} 监听中....`);
});