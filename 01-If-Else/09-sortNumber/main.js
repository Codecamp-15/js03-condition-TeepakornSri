//v.0 แสดงตัวที่มากสุด
//v.1 Handle เลขที่ไม่เหมือนกัน
//v.2 Handle เลขที่ไม่เหมือนกัน

let x = Number(prompt('Enter number 1'));
let y = +prompt('Enter number2');
let z = prompt('Enter number3') * 1;

// CASE :  x มากสุด
// CASE :  y มากสุด
// CASE :  z มากสุด
let max;
let mid;
let min;
if(x >= y && x >= z) {
    max = x;
    if (y >= z) {
        mid = y;
        min = z;
    } else {
        mid = z;
        min = y;
    }
    // console.log('MAX = ${x}');
} else if(y >= x && y >= z) {
    max = y;
    if (x >= z) {
        mid = x;
        min = z;
     } else {
        mid = z;
        min = x;
    }
    // console.log('MAX = ${y}');
} else if(z >= x && z >= y) {
    max =  z;
    if (x >= y) {
        mid = x;
        min = y;
    } else {
        mid = y;
        min = x;
    }
    // console.log('MAX = ${z}');
}
console.log(`${max} : ${mid} : ${min}`);