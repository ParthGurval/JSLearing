

console.log(`____________________________________ Method 1 ___________________________________________`);

function add(num1, num2, ...num){

    console.log(`The Given Values Are "(${num1},${num2},${num})"`);

    const res = num1 + num2;

    let addNum = 0;

    for (const number of num) {
        
        addNum += number;
    }

    const finalResult = res + addNum;
    
    console.log(`The Addition of the Given Values is: "${finalResult}"`);

    console.log(`-------------------------------------------`);
}

add(5,5);

add(5,6,7);

add(45, 45, 90);

add(5);

add(15, 25, 30, 10, 20, 30, 60, 90);


console.log(`____________________________________ Method 2 ___________________________________________`);


function restBlock(numb1, numb2, ...numb){

    console.log(`The Given Values Are "(${num1},${num2},${num})"`);

    let res1 = numb1 + numb2 + num.reduce((acc, curr) => acc + curr, 0)

    console.log(`The Addition of the Given Values is: "${res1}"`);

    console.log(`-------------------------------------------`);
}

add(5);

add(5,5);

add(5,6,7);

add(45, 45, 90);

add(15, 25, 30, 10, 20, 30, 60, 90);

/**
 * num: This is the array that contains the additional numbers passed to the add function using the rest parameter (...num).

reduce: The reduce method is a built-in function available for arrays in JavaScript. It is used to iterate over each element of an array and accumulate a value based on the elements' values.

(acc, curr) => acc + curr: This is a callback function that gets executed for each element in the num array during the iteration. It takes two parameters:

acc: This stands for "accumulator." It represents the accumulated value as the iteration progresses. Initially, it is set to the initial value provided as the second argument to the reduce method (which is 0 in this case).
curr: This stands for "current." It represents the current element being processed in the iteration.
acc + curr: Inside the callback function, this expression calculates the sum of the accumulator (acc) and the current element (curr). This sum becomes the new value of the accumulator for the next iteration.

0: This is the initial value for the accumulator (acc). It's the value that the accumulator starts with before the first iteration.
 */