

let arrayDuplication = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];

console.log("Given Array is: ", arrayDuplication);

function removeDuplicate(arr) {
    
    let removedElement = []; // Initialize an empty array to store unique elements

    for (const element of arr) {     // Loop through each element of the input array using the for...of loop
        
        if (!removedElement.includes(element)) { // Check if the removedElement does not already include the current element
            removedElement.push(element)         // If the element is not already in removedElement, add it
        }
    }

    return removedElement;    // Return the removedElement containing only the unique elements
}

let res = removeDuplicate(arrayDuplication);
console.log(`After Removing Duplicate elements from the array, It will be:`);
console.log(res);
