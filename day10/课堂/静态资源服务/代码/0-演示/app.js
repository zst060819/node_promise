//1. 引入 giao-server 包
const Server = require("giao-server");

//2. 实例化
const server = new Server({root: 'D:/', port: 9000});

//3. 启动
server.run();