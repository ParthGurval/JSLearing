// function findAndAddSimilarNumbers(arr) {
//     const similarNumbers = {}; // Use an object to store similar numbers as keys
  
//     // Iterate through the array and find similar numbers
//     for (let i = 0; i < arr.length; i++) {
//       const currentNum = arr[i];
  
//       if (similarNumbers[currentNum]) {
//         // If the number is similar, add it to the existing entry
//         similarNumbers[currentNum].push(currentNum);
//       } else {
//         // If it's not similar, create a new entry
//         similarNumbers[currentNum] = [currentNum];
//       }
//     }
  
//     // Calculate the sum of similar numbers and store in the result array
//     const result = [];
//     for (const key in similarNumbers) {
//       const sum = similarNumbers[key].reduce((acc, val) => acc + val, 0);
//       result.push(sum);
//     }
  
//     return result;
//   }
  
//   const inputArray = [1, 5, 7, -1, 6, 5, 7, 6, 4, 1, 3, 5];
//   const similarSumArray = findAndAddSimilarNumbers(inputArray);
  
//   console.log(similarSumArray); 




  function findAndAddSimilarNumbers(arr) {
    const similarNumbers = {}; // Use an object to store similar numbers as keys
  
    // Iterate through the array and find similar numbers
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
  
      if (similarNumbers[currentNum]) {
        // If the number is similar, add it to the existing entry
        similarNumbers[currentNum].push(currentNum);
      } else {
        // If it's not similar, create a new entry
        similarNumbers[currentNum] = [currentNum];
      }
    }
  
    // Calculate the sum of similar numbers and store in the result array
    const result = [];
    for (const key in similarNumbers) {
      const similarSet = similarNumbers[key];
      const sum = similarSet.reduce((acc, val) => acc + val, 0);
      result.push(`Addition of inputArray Number ${similarSet.join('+')}=${sum}`);
    }
  
    return result;
  }
  
  const inputArray = [1, 5, 7, -1, 6, 5, 7, 6, 4, 1, 3, 5];
  const similarSumArray = findAndAddSimilarNumbers(inputArray);
  
  similarSumArray.forEach((item) => console.log(item));