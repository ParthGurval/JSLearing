// function voteEligiblity(age, name) {
    
//     var ageValue = +age;
//     if (age>=120 || age<=0 || isNaN(ageValue) ) {
//         console.log(`${name} your age ${age} is not valid`);
//         return;
//     }

//     else{
//         if (age>=18) {
//             console.log(`${name} you are eligible for voting`);            
//         } else {
//             console.log(`${name} you are not eligible for vote`);
//         }
//     }

// }

// voteEligiblity(26, "Anchal");
// voteEligiblity(17, "Prathamesh");
// voteEligiblity(-21, "Arbaz");
// voteEligiblity(125, "Sid");
// voteEligiblity("uk", "Rohit");
// voteEligiblity("Ninty", "Atharva")



// var fact = 1;
// function factorial(num){
//     // 5 * 4 * 3 * 2 * 1
//    if(num==1) {
//     return fact;
//    } else {
//     return fact = num * factorial(num-1); //5 * 4 * 3 * 2 * 1
//    } 
// }
// factorial(5);
// console.log(`Factorial using recursion is: ${fact}`);


var fact = 1;
function factorial(num, originalNum) {
    if (num == 1) {
        return fact;
    } else {
        fact *= num;
        return factorial(num - 1, originalNum);
    }
}

const inputNumber = 5; // Change this to any desired number
factorial(inputNumber, inputNumber);
console.log(`Factorial expression for ${inputNumber}! = ${inputNumber} * ${factorial(inputNumber-1, inputNumber)}`);
