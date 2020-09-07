const express = require('express');
const url = require('url');
const app = express();

//路由 - 1 
app.all('/server', (request, response) => {
    const data = {
        name: 'ATGUIGU'
    }
    response.end(`handleData(${JSON.stringify(data)})`);
});

//路由 - 2
app.all('/jsonp-server', (request, response) => {
    //获取url参数中的 callback 参数
    let cb = url.parse(request.url, true).query.callback;
    //数据
    const data = {
        name: '尚硅谷'
    };
    response.end(`${cb}(${JSON.stringify(data)})`);
});

//路由 cors
app.all('/cors-server', (request, response) => {
    //『设置响应头』
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    const data = {
        name:"尚硅谷"
    };

    response.end(JSON.stringify(data));
});


app.listen(8000, () => {
    console.log("server is okk.......");
});