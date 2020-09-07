/*
    通过 fs 模块创建下列文件结构
    project
        images
            logo.png
        css
            app.css
        js
            app.js
        index.html
 */

const fs = require('fs');

fs.mkdir("project", err => {
    if(err) throw err;
    //如果成功
    fs.mkdir("project/images", err =>{
        if(err) throw err;
        fs.writeFile('project/images/logo.png','', err => {});
    });

    fs.mkdir("project/css", err =>{
        if(err) throw err;
        fs.writeFile('project/css/app.css','', err => {});
    });

    fs.mkdir("project/js", err =>{
        if(err) throw err;
        fs.writeFile('project/js/app.js','', err => {});
    });

    fs.writeFile('project/index.html','', err => {});
})


// fs.mkdirSync("project");
// fs.mkdirSync("images");
// fs.mkdirSync("css");
// fs.mkdirSync("js");