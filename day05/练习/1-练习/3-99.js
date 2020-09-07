/**
 *  1 * 1 = 1
 *  1 * 2 = 2   2 * 2 = 4
 *  1 * 3 = 3   2 * 3 = 6   3 * 3 = 9
 *  1 * 4 = 4   2 * 4 = 8;  3 * 4 = 12  4 * 4 = 16
 * 
 */
// i 行      j 定义为 列   
for(let i = 1;i <= 9;i++){
    //声明字符串
    let str = '';
    for(let j = 1; j<=i; j++){
        str += `${j} * ${i} = ${j * i} `;
    }
    console.log(str);
}

// console.log(`adsfasdfada\r\nasdlkfajslk\r\ndfjlkwe<br>`)

console.log("1*1=1");
console.log("1*2=2 2*2=4");
console.log("1*3=3 2*3=6 3*3=9");
