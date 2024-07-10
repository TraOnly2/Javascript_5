
// function number([a,b,...rest]){
//    return (a + b);
// }


// console.log(number([1,2]))



function number(...num){
    return num.reduce((acc, cur)=> acc + cur, 0)
}

console.log(number(1,2,3,4));