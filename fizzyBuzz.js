


// for (let i = 1; i <= 100; i++) {
   
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`FizzyBuzz`);
//     }

//     else if (i % 3 == 0) {
//         console.log("Fizz");
//     }

//     else if (i % 5 ==0) {
//         console.log("Buzz");
//     }

//     else{
//         console.log(i);
//     }
// }

console.log(`--------------------------------------------------------------------------`);

function findAvgCalue(arrNum) {
    if(arrNum.length == 0) {

        return 0;
    }

    const sum = arrNum.reduce((totalNum, num) => totalNum + num, 0);

    const averageNum = sum / arrNum.length;
    return averageNum;
}


const arrEle = [1, 2, 3, 4, 5, 6, 7, 8,9];

console.log(findAvgCalue(arrEle));