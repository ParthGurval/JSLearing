

function sumOfNumbers(num){

    const numStr = num.toString();

    let sum=0;

    for (let i = 0; i < numStr.length; i++) {
       
        const sepDegit = parseInt(numStr[i], 10);
        sum += sepDegit;
    }

    return `The Addition of the Given Numbers ${num} => ${numStr.split('').join('+')} = ${sum}`
}

const num = 12345;
const result = sumOfNumbers(num);
console.log(result);



console.log('---------------------------------------------------------------------------------');


function arrangeAplha(str){

    return str.split('').sort().join('');
}

console.log(arrangeAplha("javascript"));


console.log('----------------------------------------------------------------------------------');

