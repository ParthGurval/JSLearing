
console.log(`______________________ Assignment No. 01 _________________________`);
console.log(`---------------------------- STEP-I ------------------------------`);

let vowelCheck = function (str) {
    
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        
        const char = str.charAt(index);

        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
           char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'){
        
            console.log(char);
            count = count + 1;
            console.log(`-------------------------------------`);
           }
    }
    console.log(`Total Number of Count is ${count}`);
}

vowelCheck("I am very good IT Developer");

console.log(`---------------------------- STEP-II ------------------------------`);


let cubeOfNumbers = function (){

    let sumOfCube = 0;
    for (let index = 1; index <=5; index++) {

        const res1 = index * index * index;

        sumOfCube = sumOfCube + res1;

        console.log(`Cube of ${index} is: ${res1}`);
    }

    console.log(`Total Sum of Numbers is: ${sumOfCube}`);
}

cubeOfNumbers();

console.log(`---------------------------- STEP-III ------------------------------`);

function oddPositionedChars(str1){

    for (let index = 0; index < str1.length; index++) {
        
        const res2 = str1.charAt(index);

        if(index % 2 == 1 && res2 !== ' '){
            console.log(`The Character at odd Poition Number ${index} is: ${res2}`);
            console.log(`--------------------------------------------------`);
        }

        
    }
}

oddPositionedChars(`Hard Work Always Pays Back`);
console.log(`__________________________ String 2 _________________________________`);
oddPositionedChars(`Soon I will be Raect IT Champ`);
