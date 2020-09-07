//引入 npm lodash 模块
const _ = require("lodash");

const arr = [1,2,3,4,5,6,7,8,9];// express koa

//拆分
const result = _.chunk(arr, 3);

console.log(result);