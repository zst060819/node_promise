/**
 * 创建一个 HTTP 服务
 * GET    /join         响应一个表单页面
 * POST   /join         将表单中的数据,保存起来, 提示用户注册成功
 */
const http = require("http");
const url = require('url');
const fs = require('fs');
const qs = require("querystring");//a=100&b=200  => {a:100, b:200}

const server = http.createServer((request, response) => {
    //获取请求方法与请求路径
    let method = request.method;
    let path = url.parse(request.url).pathname;
    //判断是否为注册页面  /join  GET
    if (method === 'GET' && path === '/join') {
        fs.readFile(__dirname + "/views/join.html", (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    } else if (method === 'POST' && path === '/join') {
        //1. 声明变量
        let body = '';
        //2. 绑定 data 事件
        request.on('data', (chunk) => {
            body += chunk;
        })
        //3. 绑定 end 事件
        request.on('end', () => {
            const data = qs.parse(body);
            //保存方式 一 
            // const str = JSON.stringify(data);
            // //将用户信息存入到文件中
            // fs.writeFile(__dirname + '/db', str + '\r\n', { flag: 'a' }, (err) => {
            //     if (err) throw err;
            //     //将数据保存起来 实际场景保存在数据库, 现在保存在文件中
            //     response.setHeader("content-type", 'text/html;charset=utf-8');
            //     response.end('ok的啦!!');
            // });

            //保存方式 二
            //读取db文件中的内容
            const str = fs.readFileSync(__dirname + '/db');// "[]"
            //转换
            const users = JSON.parse(str);// []
            //数据压入
            users.push(data);// [{email: 'axx', password:'xxx'}]
            //将 users 数组转化为 字符串
            const result = JSON.stringify(users);
            //将数据写入文件中
            fs.writeFile(__dirname + "/db", result, err => {
                if(err) throw err;
                response.setHeader("content-type",'text/html;charset=utf-8');
                //跳转 一 
                // response.end('恭喜您 注册成功!!<script>location.href = "http://www.baidu.com"</script>');
                //跳转 二
                // response.setHeader("location",'http://www.baidu.com');
                // response.statusCode = 302;
                // response.end('');
            });
        });
    } else {
        response.end('404 Not Found');
    }
});

server.listen(8000);