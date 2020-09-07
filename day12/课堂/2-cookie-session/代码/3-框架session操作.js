//1. 引入 express 框架
const express = require('express');
const session = require("express-session");

//2. 创建对象
const app = express();

app.use(session({
    name: 'connect_userKey',   //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true,//是否在每次请求时重新保存session
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作.  
        maxAge: 1000 * 300 // 这一条 是控制 sessionID 的过期时间的！！！
    },
}));

app.get('/set-session', (request, response)=>{
    //设置session (用户登录成功以后, 设置 session)
    //实际场景中, 会将 session 存储到数据库中
    request.session.name = 'xiaohigh';
    request.session.user_id = 200;
    request.session.email = 'abc@qq.com';

    response.send('session的设置');
});

app.get('/get-session', (request, response)=>{
    //读取session
    console.log(request.session.name);
    console.log(request.session.user_id);
    console.log(request.session.email);
    response.send('session的读取');
});

app.get('/cart',(request, response)=>{
    //读取session
    console.log(request.session.name);
    console.log(request.session.user_id);
    console.log(request.session.email);
    response.send('购物车');
});

//清除 session
app.get("/clear-session",(request, response)=>{
    request.session.destroy(function(){
        //清除session
        response.send('成功退出登录'); 
    });
});

app.listen(8000);

