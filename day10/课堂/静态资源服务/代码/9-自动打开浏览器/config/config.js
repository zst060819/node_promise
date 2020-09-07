//暴露一个对象
module.exports = {
    //设置端口号
    port: 9000 ,
    //根目录
    root: __dirname+'/../public', 
    //自己实现 控制强制缓存
    forceCache: true,
    //自动打开浏览器
    autoOpn: false
}