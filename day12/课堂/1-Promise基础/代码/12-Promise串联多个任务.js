const fs = require('fs');

//使用 Promise 读取文件
new Promise((resolve, reject) => {
    fs.readFile('./resource/1x.html', (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
}).then(value => {
    //读取第二个文件内容
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/2.html', (err, data) => {
            if (err) reject(err);
            resolve([value, data]);
        });
    })
}).then(value=>{
    //读取第三个文件内容
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/3.html', (err, data) => {
            if (err) reject(err);
            //将第三个文件内容压入到数组
            value.push(data);
            resolve(value);
        });
    })
}).then(value=>{
    console.log(value);
    //异常穿透
}).catch(function(reason){
    console.log('失败啦!!');
    console.log(reason);
})