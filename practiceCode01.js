/*  
You are given an array of numbers representing the ages of a group of people. 
Your task is to create a set of functions that perform various operations on this array.

Start with the following array of ages:
const ages = [25, 16, 30, 42, 18, 22, 39, 50, 27, 19];

Implement the following functions:

a. filterAges(ages, condition): This function should take an array of ages and a condition function as parameters. 
It should return a new array containing only the ages that satisfy the given condition.

b. mapAges(ages, transform): This function should take an array of ages and a transform function as parameters. 
It should return a new array where each age is transformed according to the given transform function.

Challenge:
Create additional condition and transform functions and use them with the provided array to practice filtering and transforming elements.
*/

const ages = [25, 16, 30, 42, 18, 22, 39, 50, 27, 19];

// Condition functions
function isAdult(age) {
  return age >= 18;
}

function isEven(age) {
  return age % 2 === 0;
}

// Transform functions
function doubleAge(age) {
  return age * 2;
}

function addTen(age) {
  return age + 10;
}

// Filter function
function filterAges(ages, condition) {
  return ages.filter(condition);
}

// Map function
function mapAges(ages, transform) {
  return ages.map(transform);
}

// Additional condition and transform functions
function isPrime(age) {
  if (age <= 1) return false;
  if (age <= 3) return true;
  if (age % 2 === 0 || age % 3 === 0) return false;

  for (let i = 5; i * i <= age; i += 6) {
    if (age % i === 0 || age % (i + 2) === 0) return false;
  }
  return true;
}

function squareRootAge(age) {
  return Math.sqrt(age);
}

// Using the functions
const adults = filterAges(ages, isAdult);
console.log("Adults:", adults);

const doubledAges = mapAges(ages, doubleAge);
console.log("Doubled Ages:", doubledAges);

const evenAges = filterAges(ages, isEven);
console.log("Even Ages:", evenAges);

const addedTenAges = mapAges(ages, addTen);
console.log("Ages + 10:", addedTenAges);

const primeAges = filterAges(ages, isPrime);
console.log("Prime Ages:", primeAges);

const sqrtAges = mapAges(ages, squareRootAge);
console.log("Square Root Ages:", sqrtAges);