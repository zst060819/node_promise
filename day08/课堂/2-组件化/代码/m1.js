function fn(){
    console.log("Test");
}

//暴露数据
//1. 通用 module.exports
//可以暴露任意类型的数据
// module.exports = 1;
// module.exports = "abc";
// module.exports = {};
module.exports = function(){}