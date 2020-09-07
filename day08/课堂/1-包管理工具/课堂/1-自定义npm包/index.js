//生成一个随机数 1 - 100 rand(1,100)
function rand(m,n){
    console.log("包升级啦!!!");
    return Math.ceil(Math.random() * (n-m+1)) + m -1;
}

//暴露函数
module.exports = rand;