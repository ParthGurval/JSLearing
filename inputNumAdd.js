// /*arr=[5,4,3,2,1]*/

// // 5431=> 5+4+3+1 = 13 
// // 1+3=4

// function addSStringNum(num){

//     if(num<10){
//         return num;
//     }

//     let sum=0;
//     while(num > 0)
//     {
//         const firstAdd = num % 10;

//         sum+=firstAdd;

//         num = Math.floor(num/10);
//     }

//     return addSStringNum(num);
// }

// const inp1 = addSStringNum(5431)
// console.log(inp1);



























// var num = 5431;

// while (num >= 10) {
//     num = num.toString().split("").map(Number).reduce(function (a, b) {
//         return a + b;
//     }, 0);
// }

// console.log(num);






// function addDigits(num){

//     const numStr = num.toString();

//     let sum=0;

//     for (let i = 0; i < numStr.length; i++) {
        
//         sum+=parseInt(numStr[i]);
        
//     }

//     if (sum >= 10) {
//         return addDigits(sum);
//     }
//     else{
//         return sum;
//     }
    
// }

// const res1 = addDigits(5431);
// console.log(res1);

// var num = 7531;

// while (num >= 10) {
//      num = num.toString().split("").map(Number).reduce(function (a,b) {
//         return a+b;
    
//     },0);
// }

// console.log(num);

function sums(nums) {
    let numArr = nums.toString().split('');
    let sum = numArr.reduce((a, b) => Number(a) + Number(b));
    return sum < 10 ? sum : sums(sum);
}
let res = sums(3241)
console.log(res);