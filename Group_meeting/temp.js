

// let arrayDuplication = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];

// console.log("Given Array is: ", arrayDuplication);

// function removeDuplicate(arr){

// let tempArray = [];

// for (const element of arr) {
    
//     if (!tempArray.includes(element)) {
        
//         tempArray.push(element);
//     }

// }

//     return tempArray;

// }


// let res = removeDuplicate(arrayDuplication);

// console.log(`After Removing Duplicate Elements array will be:`);

// console.log(res);

let anArray = [];
let array = [4,5,4,5,8,5,7,8,9,7,8];
for (const i of array) {
    if (!anArray.includes(i)){
        anArray.push(i)
    }
}
console.log(array);
console.log(`After removing duplicate Values`);
console.log(anArray);