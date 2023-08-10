

const primeNum = function(num){

    //  A prime number can only be divided by 1 and itself without leaving a remainder.

    if(num <= 1 || isNaN(num) || typeof num !== "number"){
        
        console.log("Invalid Number...!!!");
        console.log('Please enter the correct Number.');
        console.log(`-----------------------------------------------------`);
        return;
    }

    else if(num == 2 || num == 3){
        
        console.log(`The Given Number ${num} is a Prime Number`);
        console.log(`-----------------------------------------------------`);
        return;
    }

    else if(num % 2 === 0 || num % 3 === 0){

        console.log(`The Given Number ${num} is not a Prime Number`);
        console.log(`-----------------------------------------------------`);
        return;
    }

    for (let i = 5; i <= Math.sqrt(num); i=i+6) {   

        if(num % i === 0 || num % (i+2) === 0){
        
        console.log(`The Given Number ${num} is not a Prime Number`);
        console.log(`-----------------------------------------------------`);
        return;

        }
        
    }

    console.log(`The Given Number ${num} is a Prime Number`);

    console.log(`-----------------------------------------------------`);

}


const number1 = 11;
let number2 = 21;
var number3 = "Fourty";
let number4 = null;
const number5 = 5;
const number6 = 97;
const number7 = 80;


primeNum(number1);
primeNum(number2);
primeNum(number3)
primeNum(number4);
primeNum(number5);
primeNum(number6);
primeNum(number7);



console.log(`========================================================================================`);
