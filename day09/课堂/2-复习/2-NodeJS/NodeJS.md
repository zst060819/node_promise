# nodeJS 

## nodeJS 模块
* fs
* http

## fs 模块 file system
* 文件写入 fs.writeFile  fs.createWriteStream  fs.writeFileSync
* 文件读取 fs.readFile   fs.createReadStream   fs.readFileSync
* 文件删除 fs.unlink
* 文件重命名  fs.rename
* 文件复制  fs.copyFile 

* 文件夹创建  fs.mkdir
* 文件夹读取  fs.readdir
* 文件夹删除  fs.rmdir

## HTTP 协议

### 请求报文
```
POST / HTTP/1.1
Host: localhost
name: abc
User-Agent: chrome

username=admin&password=admin&wd=关键字
```

### 响应报文
```
HTTP/1.1 200 OK
name: abc
Content-Type: text/html;charset=utf-8

html css js 图片 字体
```

## HTTP 模块
```
const http = require("http");

const server = http.createServer((request, response)=>{
    //获取请求数据
    request.method
    request.url
    request.httpVersion
    request.headers
    //1. 变量声明  2. 绑定 data 事件  3. 绑定 end 事件
    //获取 url 参数
    url.parse(request.url, true).query
    url.parse(requset.url).pathname

    //设置响应
    response.statusCode = 200;
    response.statusMessage= 'OK'
    response.setHeader('name','abc');
    response.write('content'); response.end();
    response.end('content');
});

server.listen(8000);

```
