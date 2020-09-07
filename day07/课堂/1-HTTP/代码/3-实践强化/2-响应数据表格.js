/**
 *  创建一个服务 GET  /table   响应一个表格
    const arr = [
        {name: 'knight', age: 18},
        {name: 'xiaoming', age: 20},
        {name: 'xiaoning', age: 28},
        {name: 'xiaotian', age: 18},
    ];
    // 姓名    年龄
 */
const http = require("http");

const server = http.createServer(function(request, response){
    const arr = [
        {name: 'knight', age: 18},
        {name: 'xiaoming', age: 20},
        {name: 'xiaoning', age: 28},
        {name: 'xiaotian', age: 18},
        {name: 'jackylove', age: 20},
    ];
    //设置响应
    //响应头
    response.setHeader("Content-Type",'text/html;charset=utf-8');
    //设置响应体 CSS style link 标签    JS 修改body 背景
    let start = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>练习</title>
        <style>
            table, td{
                border-collapse:collapse;
            }
            td{
                padding:15px;
            }
            /*
            table tr:nth-child(2n+1){
                background:#aef;
            }
            */
        </style>
    </head>
    <body>
        <h1>表格 - 各行换色</h1>
        <table border="1">
            <tr><td>姓名</td><td>年龄</td></tr>`;
    
    //数组内容拼接
    let content = '';
    arr.forEach(item => {
        content += `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
    });
    let end = `</table>

        <script>
            //获取 tr 标签
            const trs = document.querySelectorAll('tr');
            //遍历 tr
            for(let i =0;i<trs.length;i++){
                if(i % 2==0){
                    trs[i].style.background = '#52b';
                }else{
                    trs[i].style.background = '#c59';
                }
            }
        </script>
    </body>
    </html>
    `
    
    let result = start + content + end;
    
    response.end(result);
});

server.listen(8000);