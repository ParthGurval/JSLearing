
console.log(`--------------------------------- STEP-I -----------------------------`);

function evenOdd(number) {

    var result = +number
    if (isNaN(result)) {
        console.log(`Please Enter Valid Input`);
    } else {
        if (number % 2 == 0) {
            console.log(`The Given Number is ${number} is Even`);
        }
        else{
            console.log(`The Given Number is ${number} is Odd`);
        }
    }    
}

evenOdd(45);
console.log('');
evenOdd(70);
console.log('');
evenOdd(67);
console.log('');
evenOdd(98);
console.log('');
evenOdd('Eight');
console.log('');
evenOdd(-18);
console.log('');
evenOdd("Elon");

console.log('');

console.log(`--------------------------------- STEP-II -----------------------------`);

function checkString(inputSring) {
   
        if (inputSring.length > 10) {
            console.log(`The Given String contains more than 10 characters`);
        } 
        else {
            console.log(`The Given String doesn't contains more than 10 characters`);
        }        
}

checkString("JavaScript-ES6");
checkString("Java");


console.log('');

console.log(`--------------------------------- STEP-III -----------------------------`);

function startString(inputSringAs) {
    
    if (inputSringAs.startsWith("Java")) {
        console.log(`The given String "${inputSringAs}" Starts with name Java"`);
    } else {
        console.log(`The given String "${inputSringAs}" doesn't Starts with name Java"`);
    }
}

startString("JavaScript Language");
startString("Python Language");