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
    // let filePath = __dirname + '/public' + path;

    //  /home.html   public/home.html
    if(path === '/home.php') {
        fs.readFile(__dirname + "/public/home.html", (err, data)=>{
            response.end(data);
        })
    }else if(path === "/css.exe"){
        response.end(`
            * {margin:0px;padding:0px;}
            body{
                background:#c85;
            }
        `);
    }else if(path === "/egm.abc"){
        response.end(`
            console.log("我也是阔以的哦!!!");
        `)
    }
    else{
        response.end('ok');
    }
});

server.listen(8000);