// // //Assignment on this--> use add block to add given numbers...
// // function add(num1, num2=1){
// //     // console.log(`num1 ${num1},  num2 ${num2}`);
// //     // console.log(num2);
// //     console.log(num1/num2);
// // }

// // add(9);
// // add(78);


// let stud = {

//     rollNum: 100101,
//     state: "MH",
//     city: "Pune",
//     college: "MIT"
// }

// // let state = stud.state;
// // let college = stud.college;
// // let city = stud.city;

// const {state, college, city, pin} = stud;

// console.log(state, college, city, pin);


// // let array = [4, 5, 6];

// // // 
// // let [num1, num2, num3] = array;
// // console.log(num1, num2, num3, num4);



// function show(){

//     console.log(`Inide show`);
// }

// show();

// //self Invoking Function 

// (function(){
//     console.log(`Inside Display`);
// })()


// Create an array of 5 fruits
const fruits = ["Parth", "Satya", "Dipak", "Akash", "Vijay"];

// Create an array of numbers from 1 to 5
const numbers = [1, 2, 3, 4, 5];

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle both arrays
shuffleArray(fruits);
shuffleArray(numbers);




// Create pairs of fruits and numbers
const pairs = [];
for (let i = 0; i < fruits.length; i++) {
  pairs.push(`${fruits[i]}: ${numbers[i]}`);
}

// Join the pairs into a single string
const output = pairs.join(', ');

console.log(output);




// USING FOR-OF LOOP

// const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
// const numbers = [1, 2, 3, 4, 5];

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// shuffleArray(fruits);
// shuffleArray(numbers);

// const pairs = [];
// let i = 0;

// for (const fruit of fruits) {
//   pairs.push(`${fruit}: ${numbers[i]}`);
//   i++;
// }

// const output = pairs.join(', ');
// console.log(output);

// USING forEach loop

// const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
// const numbers = [1, 2, 3, 4, 5];

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// shuffleArray(fruits);
// shuffleArray(numbers);

// const pairs = [];

// fruits.forEach((fruit, index) => {
//   pairs.push(`${fruit}: ${numbers[index]}`);
// });

// const output = pairs.join(', ');
// console.log(output);


