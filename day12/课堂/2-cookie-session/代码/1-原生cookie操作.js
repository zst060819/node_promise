//
const http = require('http');

const server = http.createServer((request,response)=>{
    //设置cookie  如果不加声明周期设置 浏览器关闭就清除 cookie
    // response.setHeader("set-cookie", 'username=xiaohigh');
    //添加声明周期, 即使关闭浏览器也不会销毁
    // response.setHeader("set-cookie", 'username=xiaohigh;max-age=300');
    //添加path属性, 设置 cookie 有效路径 
    response.setHeader("set-cookie", 'username=xiaohigh;max-age=300;path=/');
    
    response.end('ok')
});

server.listen(8000);