const ejs = require('ejs');
const fs = require('fs');

let title = "H5200422-今日之星";
let h2 = '获奖名单';
const names = ['建帅','王伟','庆峰','殷俊'];
let isVip = false;
//HTML 字符串
let str = fs.readFileSync('./views/index.html').toString();

//使用 ejs 进行解析
let html = ejs.render(str, {title, h2, names, isVip});

console.log(html);

