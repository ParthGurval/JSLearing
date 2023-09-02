// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to find the sum of all elements in the array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to find the maximum value in the array
function findMax(arr) {
  return Math.max(...arr);
}

// Function to find the minimum value in the array
function findMin(arr) {
  return Math.min(...arr);
}

// Function to filter even numbers from the array
function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Function to double each element in the array
function doubleArray(arr) {
  return arr.map(num => num * 2);
}

// Function to check if all elements in the array are greater than 0
function areAllPositive(arr) {
  return arr.every(num => num > 0);
}

// Function to find the index of a specific element in the array
function findIndex(arr, target) {
  return arr.indexOf(target);
}

// Function to remove a specific element from the array
function removeElement(arr, target) {
  const index = arr.indexOf(target);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

// Example usage
console.log("Original Array:", numbers);
console.log("Sum of Array:", findSum(numbers));
console.log("Max Value in Array:", findMax(numbers));
console.log("Min Value in Array:", findMin(numbers));
console.log("Even Numbers in Array:", filterEven(numbers));
console.log("Double of Array:", doubleArray(numbers));
console.log("Are all Positive:", areAllPositive(numbers));
console.log("Index of 5:", findIndex(numbers, 5));
console.log("Remove 8 from Array:");
removeElement(numbers, 8);
console.log("Modified Array:", numbers);