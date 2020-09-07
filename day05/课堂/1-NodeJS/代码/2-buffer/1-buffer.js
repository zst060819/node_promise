//创建 
const buf = Buffer.alloc(10);// 声明一个 10 个字节的 Buffer
const buf2 = Buffer.allocUnsafe(10);// 声明一个 10 个字节的 Buffer
const buf3 = Buffer.from('iloveyou');
// console.log(buf);
// console.log(buf2);
// console.log(buf3);

//读取
// console.log(buf3[0]);
// console.log(buf3.toString());

//设置
// buf3[0] = 100;
// console.log(buf3.toString());

//溢出   高位舍弃   ‭0010 1100‬ =>  44
// buf3[0] = 300;
// console.log(buf3.toString());

//中文字符  一个 UTF-8 的中文占三个字节
// const buf4 = Buffer.from('我爱你');// 9 个字节. UTF-8 
// console.log(buf4);

// unicode 的使用  6200    读者(三块钱)
// let str = '\u6211\u7231\u4f60'; // 7220 11
// console.log(str);
