const http = require("http");

const server = http.createServer(function(request, response){
    //设置响应
    //响应头
    response.setHeader("Content-Type",'text/html;charset=utf-8');
    //设置响应体 CSS style link 标签    JS 修改body 背景
    response.write(`
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
                <tr><td>ABCD</td><td>ABCD</td><td>ABCD</td><td>ABCD</td></tr>
                <tr><td>ABCD</td><td>ABCD</td><td>ABCD</td><td>ABCD</td></tr>
                <tr><td>ABCD</td><td>ABCD</td><td>ABCD</td><td>ABCD</td></tr>
                <tr><td>ABCD</td><td>ABCD</td><td>ABCD</td><td>ABCD</td></tr>
                <tr><td>ABCD</td><td>ABCD</td><td>ABCD</td><td>ABCD</td></tr>
                <tr><td>ABCD</td><td>ABCD</td><td>ABCD</td><td>ABCD</td></tr>
            </table>

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
    `);
    response.end();
});

server.listen(8000);