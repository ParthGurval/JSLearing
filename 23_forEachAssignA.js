

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`Given Array is:`, arrayNumbers);

console.log('');

console.log(`--------------------- Step-I ---------------------`);

arrayNumbers.forEach((arrEle, index) => {

    console.log(`Array Element: ${arrEle}, is at index: ${index}`);
});

console.log('');

console.log(`--------------------- Step-II --------------------`);

// arrayNumbers.forEach((num) => {

//     if (num > 0) {
//         console.log(`The Number ${num} is Positive`);
//     }
// });

//Storing in an array

const empArr = [];

arrayNumbers.forEach((num) => {

    if (num > 0) {
        empArr.push(num);
        console.log(`The Number ${num} is Positive`);
    }
});

console.log('');
console.log(`The Positive Numbers from array Are:`, empArr);

//Both Positive and Negative

// arrayNumbers.forEach((num) => {

//     if (num >= 0) {
//         console.log(`The Number ${num} is Positive`);
//     }
//     else{
//         console.log(`The Number ${num} is negative`);
//     }
// });

console.log('');

console.log(`--------------------- Step-III -------------------`);

const oddArr = [];

arrayNumbers.forEach((num) => {

    if (num < 0) {
        
        oddArr.push(num);
        console.log(`The Number ${num} is Negative:`);
    }
});

console.log('');
console.log(`The Array of Negative Number is:`, oddArr);

console.log('');

console.log(`--------------------- Step-IV --------------------`);

const evenNums = [];

arrayNumbers.forEach((num) => {

    if (num % 2 == 0 && num >= 0) {

        evenNums.push(num);
        console.log(`The Even Number from array is: ${num}`);
    }
});

console.log('');

console.log(`The array of even Nummbers will be: `, evenNums);

console.log('');

console.log(`--------------------- Step-V ---------------------`);

let sumArr = 0;

arrayNumbers.forEach((num) => {

    sumArr += num
    //sumArr = sumArr + num;
});

console.log(`The total sum of all array numbers is: ${sumArr}`);

console.log('');

console.log(`--------------------- Step-VI --------------------`);

const evenIdx = [];

arrayNumbers.forEach((ele, indx) => {

    if (indx %2 == 0) {
        
        evenIdx.push(ele);
        console.log(`The Number ${ele} is at even Index`);
    }
});

console.log('');
console.log(`The array of Even Index Elements is:`, evenIdx);

console.log('');

// console.log(`--------------------- Step-VII -------------------`);

// const oddIdx = [];

// arrayNumbers.forEach((elem, indx) => {

//     if (indx % 2 !== 0) {
        
//         oddIdx.push(elem);
//         console.log(`The Number ${elem} is at odd Index`);
//     }
// });

// console.log('');
// console.log(`The array of Even index element is: `, oddIdx);