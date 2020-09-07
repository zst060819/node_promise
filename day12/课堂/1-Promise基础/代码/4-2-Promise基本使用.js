//读取一个文件内容  ./resource/1.html
const fs = require('fs');

// fs.readFile("./resource/1.html", (err, data)=>{
//     if(err){
//         console.log("读取失败");
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// });

//使用 promise 的方式读取
let p = new Promise((resolve, reject)=>{
    //异步代码
    fs.readFile("./resource/1.html", (err, data)=>{
        if(err){
            //失败的情况
            return reject(err);
        }
        //成功的情况
        resolve(data);
    });
});

p.then(function(value){
    //控制台输出
    console.log(value.toString());
}, function(reason){
    console.error(reason.code);
})