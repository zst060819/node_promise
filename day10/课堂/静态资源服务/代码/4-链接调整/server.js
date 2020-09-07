//1. 引入 http 模块
const http = require("http");
//引入 url 与 fs模块
const fs = require("fs");
const url = require('url');
//引入 ejs 模块
const ejs = require('ejs');
//2. 创建服务
const server = http.createServer((request, response) => {
    //获取请求路径  /css  /js
    let pathname = url.parse(request.url).pathname;
    //拼接文件路径
    let filePath = __dirname + '/public' + pathname;
    //获取路径对应的状态
    fs.stat(filePath, (err, stats) => {
        if (err) {
            response.statusCode = 500;
            response.end("Server Interal Error");
            return;
        }
        //判断资源类型
        if (stats.isDirectory()) {
            //如果是个文件夹  读取文件夹中文件列表
            fs.readdir(filePath, (err, fileArr) => {
                if (err) {
                    response.statusCode = 500;
                    response.end("Server Interal Error");
                    return;
                }
                // fileArr = ['index.html', 'css', 'js']
                //使用 ejs 解析
                fs.readFile(__dirname + "/views/directory.html", (err, htmlTemplate) => {
                    if (err) {
                        response.statusCode = 500;
                        response.end("Server Interal Error");
                        return;
                    }
                    //将文件内容与数据 交给 ejs 进行解析
                    const html = ejs.render(htmlTemplate.toString(),
                        { data: fileArr, pathname: pathname });
                    //响应
                    response.end(html);
                })
            });

        } else {
            //如果是个文件
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    response.statusCode = 500;
                    response.end("Server Interal Error");
                    return;
                }
                //将文件内容响应给客户端
                response.end(data);
            });
        }
    });
});

//3. 启动服务
server.listen(9000, () => {
    console.log("服务已经启动, 9000 端口监听中....");
});