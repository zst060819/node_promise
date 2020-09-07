let ejs = require('ejs');

//数组
let people = ['霞霞', '蕾蕾', '帅帅','东东'];
//1. 数据准备
let title = "H5200422";
let h2 = "今日天气";

//字符串
// let str = '<%= people.join(", "); %>';
//3. 在字符串中添加 ejs 的语法
let str = '<title><%= title %></title><h2><%= h2 %></h2>';
//2. 对象中添加对应的属性
let html = ejs.render(str, { people, title, h2 });

console.log(html);