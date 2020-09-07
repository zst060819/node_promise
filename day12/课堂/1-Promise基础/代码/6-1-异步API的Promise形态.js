/*
    封装一个函数 mineReadFile， 读取文件并返回一个 promise 对象
 */
const fs = require('fs');

function mineReadFile(filePath) {
    //返回 promise 对象
    return new Promise((resolve, reject) => {
        let fn = (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        }
        fs.readFile(filePath, fn);
    });
}

mineReadFile('./resource/1.html').then(value => {
    console.log(value.toString());
});


// const result = mineReadFile('./resource/1x.html');

// result.then(value=>{
//     console.log('读取成功')
//     console.log(value.toString());
// }, reason=>{
//     console.log('读取失败');
//     console.log('失败原因', reason);
// })

// setTimeout(()=>{
//     console.log(result);
// }, 1000)
