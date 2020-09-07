//1. 引入 http 模块
const http = require("http");
//引入 url 与 fs模块
const fs = require("fs");
const url = require('url');
//引入 ejs 模块
const ejs = require('ejs');
//引入 mimes 模块
const mimes = require("./mimes/mimes.json");
//引入 zlib 模块
const zlib = require("zlib");
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
                //获取后缀  js
                let suffix = filePath.split('.').pop();
                if(mimes[suffix]){
                    //如果mimes类型中存在此设置
                    response.setHeader("Content-Type", mimes[suffix]);
                }else{
                    //如果mimes中没有此设置
                    response.setHeader('Content-Type','text/plain;charset=utf-8');
                }
                //设置压缩的响应头  gzip, deflate, br    gzip
                const acceptEncoding = request.headers['accept-encoding'];
                //判断
                if(acceptEncoding.indexOf('gzip') != -1){
                    //如果客户端浏览器支持 gzip 压缩方式
                    response.setHeader("Content-Encoding","gzip");
                    //对响应体结果进行压缩 compressData 压缩后的数据
                    zlib.gzip(data, function(err, compressData){
                        if (err) {
                            response.statusCode = 500;
                            response.end("Server Interal Error");
                            return;
                        }
                        response.end(compressData);
                    })
                }else if(acceptEncoding.indexOf('deflate') != -1){
                    //如果支持deflate 压缩
                    //如果客户端浏览器支持 gzip 压缩方式
                    response.setHeader("Content-Encoding","deflate");
                    //对响应体结果进行压缩 compressData 压缩后的数据
                    zlib.deflate(data, function(err, compressData){
                        if (err) {
                            response.statusCode = 500;
                            response.end("Server Interal Error");
                            return;
                        }
                        response.end(compressData);
                    })
                }else {
                    //如果不支持压缩方式, 则原文响应
                    response.end(data);
                }

                
            });
        }
    });
});

//3. 启动服务
server.listen(9000, () => {
    console.log("服务已经启动, 9000 端口监听中....");
});