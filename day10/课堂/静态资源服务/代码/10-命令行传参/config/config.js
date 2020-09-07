const {argv} = require('yargs');

//暴露一个对象
module.exports = {
    //设置端口号
    port: argv.port || 9000 ,
    //根目录
    root: argv.root || process.cwd(), 
    //自己实现 控制强制缓存
    forceCache: true,
    //自动打开浏览器  
    autoOpn: true
}