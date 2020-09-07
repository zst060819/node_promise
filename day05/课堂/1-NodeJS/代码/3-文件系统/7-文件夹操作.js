//文件夹操作
const fs = require('fs');

//1. 创建文件夹 project
// fs.mkdir("./project", err => {
//     if(err) throw err;
//     console.log("文件夹创建成功");
// });

// PC/images   recursive 递归的
// fs.mkdir("./PC/images", {recursive: true}, err => {
//     if(err) throw err;
//     console.log("文件夹创建成功");
// });


//同步伪代码  与异步回调做对比
// let result = mkdir();
// if(result){
//     console.log("文件夹创建成功!");
// }

//2. 读取文件夹
// fs.readdir("C:/", (err, files) => {
//     if(err) throw err;
//     console.log(files);
// });

//3. 删除文件夹
fs.rmdir("./PC", {recursive: true},err => {
    if(err) throw err;
    console.log("删除成功!!");
});