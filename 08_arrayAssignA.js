

console.log(`______________________________ Assignment No. 01 __________________________________`);
console.log('');


const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`The Given Array Elements are: ${arrayFruits}`);

console.log('');

console.log(`--------------------------- Step-I ------------------------------`);
console.log('Log The First & Last Element On Console');

console.log(`First Element is: ${arrayFruits[0]}`);
console.log(`Last Element is:  ${arrayFruits[arrayFruits.length-1]}`);

console.log('');

console.log(`--------------------------- Step-II ------------------------------`);
console.log(`Add element--> "Papaya" before element "Banana" and then log the aaray on the console`);

arrayFruits.unshift("Papaya");
console.log(arrayFruits);

console.log('');

console.log(`--------------------------- Step-III ------------------------------`);
console.log(`Remove mango from array`);

let removeMango = arrayFruits.splice(4,1); // arrayFruits.splice(indexnum ,num of values to change);
console.log(arrayFruits);
console.log(removeMango);

// const removeMango = arrayFruits.indexOf("Mango");

// if (removeMango !== -1) {
//     arrayFruits.splice(removeMango, 1)
// }

// console.log(arrayFruits);

console.log('');

console.log(`--------------------------- Step-IV ------------------------------`);
console.log(`Add element or insert element "Pineapple" at the last position in the array`);

arrayFruits.push("Pineapple");
console.log(arrayFruits);

console.log('');

console.log(`--------------------------- Step-V ------------------------------`);
console.log(`Insert an element "Dragon Fruit" before element "Water Melon"`);

arrayFruits.splice(4, 0, "Dragon Fruit");  //arrayFruits.splice(indexno. , Numbers of values to change, values to insert);
console.log(arrayFruits);

// const indexToInsert = arrayFruits.indexOf("Water Melon");
// if (indexToInsert !== -1) {
//   arrayFruits.splice(indexToInsert, 0, "Dragon Fruit");
// }

// console.log(arrayFruits);


console.log('');

console.log(`--------------------------- Step-VI ------------------------------`);
console.log(`Replace an element "Orange" with "Kiwi"`);

arrayFruits.splice(2, 1, "Kiwi");
console.log(arrayFruits);

// const indexOfOrange = arrayFruits.indexOf("Orange");
// if (indexOfOrange !== -1) {
//   arrayFruits[indexOfOrange] = "Kiwi";
// }
// console.log(arrayFruits);


console.log('');


console.log(`--------------------------- Step-VII ------------------------------`);
console.log(`log the element starting from index 1 to 4`);

console.log(arrayFruits.slice(1,5));  //arrayFruits.slice(start index, last index+1)


console.log('');


console.log(`--------------------------- Step-VIII ------------------------------`);
console.log(`Only select last 3 element and log on console: use the length property`);

let lastThree = arrayFruits.slice(arrayFruits.length-3);
console.log(arrayFruits);
console.log(lastThree); 

// const lastThreeElements = arrayFruits.slice(-3);
// console.log(lastThreeElements);