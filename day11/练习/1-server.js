const express = require('express');
const url = require('url');
const app = express();

//路由 -1 
app.all('/lianxi-1', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader("Content-type", 'text/plain;charset=utf-8');
    response.end("我们终此一生，就是要摆脱他人的期待，找到真正的自己")
});

app.all('/lianxi-2', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader("Content-type", 'text/plain;charset=utf-8');
    response.end(`
        {
            "id": 1307,
            "uuid": "449f2d26-bdec-4cd6-8572-ec3d34a79876",
            "hitokoto": "你还有好多未完成的梦，你有什么理由停下脚步",
            "type": "f",
            "from": "网络",
            "from_who": null,
            "creator": "Bruce jcworm",
            "creator_uid": 884,
            "reviewer": 0,
            "commit_from": "web",
            "created_at": "1512524912",
            "length": 21
        }
    `)
});

app.listen(8000, () => {
    console.log("server is okk.......");
});