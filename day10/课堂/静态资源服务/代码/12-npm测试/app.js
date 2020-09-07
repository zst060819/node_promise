const Server = require("laduolei-static-server");

const server = new Server({
    root: 'c:/',
    port: 6063,
    autoOpn: true
});

server.run();