


console.log(`___________________________ Method 1 _________________________________`);

function add(num1, num2, ...num){

    console.log(`The given values are: "${num1},${num2}, ${num}"`);

    const res = num1 + num2;

    // console.log(`The result will be "${res}"`);

    addNum = 0;

    for (const key of num) {
        
        addNum += key;

    }

    const finalRes = res + addNum;

    console.log(`The final Value of the given result is "${finalRes}"`);

}

add(5,5,5,5);


console.log(`___________________________ Method 2 _________________________________`);



// function restNum(numb1, numb2, ...numb){

//     console.log(`The given values are: "${numb1},${numb2}, ${numb}"`);

//     const rest = numb1 + numb2 + numb.reduce((acc, curr) => acc + curr, 0);
    
//     console.log(`The Final addition will be: ${rest}`);
// }

// restNum(5,5,5,5,5);








console.log(`---------------------------------------------------------------`);

console.log(`Example of Reduce method`);



const numbers = [10, 20, 25, 95, 40, 75, 101, 120];

const maxVal = numbers.reduce((acclor, currVal) => Math.max(acclor, currVal));

console.log(maxVal);


const mixArr = [[1,2,3], [4,5,6], [7,8,9,10]];

const finalArray = mixArr.reduce((acc, curr) => acc.concat((curr), []) );

const maxNum = finalArray.reduce((acclr, currVal) => Math.max(acclr, currVal));

console.log(finalArray);

console.log(maxNum);