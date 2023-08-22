

// let add = function(){

//     console.log(12+12);
// }

// add()

// console.log(``);

// let multi = (num1, num2, num3=1) => {
//     console.log(num1*num2*num3);
// }

// multi(5,5)

const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log(arr.length);



arr.forEach(element => {
    console.log(`Array index of ${element} is ${arr.indexOf(element)}`);
});