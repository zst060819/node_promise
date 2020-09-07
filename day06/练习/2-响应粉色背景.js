const http = require("http");

const server = http.createServer(function(request, response){
    //设置响应
    //响应头
    response.setHeader("Content-Type",'text/html;charset=utf-8');
    //设置响应体 CSS style link 标签    JS 修改body 背景
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>练习</title>
            <style>
                body{
                    background:pink;
                }
            </style>
        </head>
        <body>
            <h1>H520422</h1>
        </body>
        </html>
    `);
    response.end();
});

server.listen(8000);