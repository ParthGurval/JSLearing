

// function getAge(){
//     'use strict';
//     var age=21;
//     console.log(age);
// }

// getAge();

// console.log(`--------------------------------`);

// Math.max();

// console.log(Math);

// sayHello(); // Hoisting allows this to work
// function sayHello() {
//     console.log("Hello, world!");
// }

// console.log(x); // undefined, not a ReferenceError

// var x = 5;

// var x = 7;

// console.log(x);

// function rotateArray(arr, positions) {
//     const n = arr.length;
//     positions %= n; // Ensure positions is within the array length
  
//     // Reverse the first part of the array
//     reverseArray(arr, 0, positions - 1);
  
//     // Reverse the second part of the array
//     reverseArray(arr, positions, n - 1);
  
//     // Reverse the entire array
//     reverseArray(arr, 0, n - 1);
//   }
  
//   function reverseArray(arr, start, end) {
//     while (start < end) {
//       const temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
//       start++;
//       end--;
//     }
//   }
  
//   // Example usage:
//   const numbers = [1, 2, 3, 4, 5];
//   rotateArray(numbers, 3);
//   console.log(numbers); 

// function divide(dividend, divisor) {
//     if (divisor === 0) {
//       return "Error: Division by zero is not allowed.";
//     }
  
//     return dividend / divisor;
//   }
  
//   // Example usages:
//   console.log(divide(10, 2)); // Output: 5
//   console.log(divide(8, 0));  


// Exercise 1: Math Operations
// Problem Statement 1:
// Write a JavaScript function add that takes two numbers as arguments and returns their sum.

// Problem Statement 2:
// Write a JavaScript function subtract that takes two numbers as arguments and returns their difference.

// Problem Statement 3:
// Write a JavaScript function multiply that takes two numbers as arguments and returns their product.

// Problem Statement 4:
// Write a JavaScript function divide that takes two numbers as arguments and returns their quotient. Handle the case where the denominator is zero and return an error message in that case.


//task1
function add(num1, num2) {
    return num1 + num2;
  }
  
  // Example usage:
  console.log(add(5, 3)); // Output: 8

  //task2
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Example usage:
  console.log(subtract(10, 4));

  //task3
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Example usage:
  console.log(multiply(6, 7));

  //task4
  function divide(dividend, divisor) {
    if (divisor === 0) {
      return "Error: Division by zero is not allowed.";
    }
  
    return dividend / divisor;
  }
  
  // Example usages:
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(8, 0));  // Output: Error: Division by zero is not allowed.


  //Problem 1: Sum of Array

  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const result = sumArray(numbers);
  console.log(result); // Output: 15

  //Problem 2: Find Maximum Element
  function findMaxElement(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Example usage:
  const numbers = [4, 2, 9, 7, 1];
  const max = findMaxElement(numbers);
  console.log(max); // Output: 9

  //Problem 3: Remove Duplicates
  function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  // Example usage:
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

 // Problem 4: Reverse Array
 function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  reverseArray(numbers);
  console.log(numbers); // Output: [5, 4, 3, 2, 1]