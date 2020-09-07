//引入
const Server = require("./server.js");

//实例化
const server = new Server({
    port: 5000,
    root: 'E:/',
    autoOpn: false
});

//执行
server.run();