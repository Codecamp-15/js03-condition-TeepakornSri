let num1 = +prompt('input1');
let num2 = +prompt('input2');
let result = num1 + num2;

// if ( !isNaN(num1) && !isNaN(num2) ) {
//     alert(result)
// }else{
//     alert('invalid number')
// }


if ( isNaN(num1) || isNaN(num2)) {
    alert('invalid number');

}else {
    alert(result)
}

