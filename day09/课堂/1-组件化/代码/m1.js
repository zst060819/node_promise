let name = '尚硅谷abc';
function change(){
    console.log("我们可以改变");
}

//暴露
module.exports = {name, change};
//
// module.exports.name = name;
// module.exports.change = change;

// exports.name = name;
// exports.change = change;

//不可用 X
// exports = {name:'abc'};