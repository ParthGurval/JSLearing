function findSimilarNums(arr) {
    const objSimilarNums = {};

    for (let i = 0; i < arr.length; i++) {
        const currElement = arr[i];
        
        if (objSimilarNums[currElement]) {
            objSimilarNums[currElement].push(currElement);
        } else {
            objSimilarNums[currElement] = [currElement];
        }
    }

    return objSimilarNums; 
}

const inputArrayNums = [1, 5, 1, 4, 4, -1, 6, 5, 7, 6, 4, 1, 3, 5];
const result1 = findSimilarNums(inputArrayNums);

// const inputArr2 = ["Parth", "Satya", "Parth"];
// const result2 = findSimilarNums(inputArr2);

console.log(result1);
// console.log(result2);



// Using Empty Array

// function findSimilarNums(arr) {
//     const similarNumsArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         const currElement = arr[i];
        
//         // Check if currElement exists in similarNumsArray
//         const groupIndex = similarNumsArray.findIndex(function(group) {
//             return group.includes(currElement);
//         });

//         if (groupIndex !== -1) {
//             // If currElement is found in a group, add it to that group
//             similarNumsArray[groupIndex].push(currElement);
//         } else {
//             // If currElement is not found in any group, create a new group with it
//             similarNumsArray.push([currElement]);
//         }
//     }

//     return similarNumsArray; 
// }

// const inputArrayNums = [1, 5, 7, -1, 6, 5, 7, 6, 4, 1, 3, 5];
// const result1 = findSimilarNums(inputArrayNums);

// console.log(result1);
