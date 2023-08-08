

console.log(`------------------------ STEP-I ---------------------------------`);

let personalDetails = {

    fullName: "Sam Roy",
    age: "21",
    homeTowm: "kolhapur",
    hobby: "Coding & web dev",
    yearEarning: 75000000
}



console.log(personalDetails);


console.log(`------------------------ STEP-I ---------------------------------`);


let collegeDetails = {

    collegeName: "KITCOEK",
    collegeLoc: "Kolhapur",
    specalization: "CSE",
    rollNum: 18190000273
}

console.log(collegeDetails);

console.log(`------------------------ STEP-III ---------------------------------`);


let mergeDetails = Object.assign({}, personalDetails, collegeDetails);
console.log(mergeDetails);
console.table(mergeDetails);

console.log(`------------------------ STEP-IV ---------------------------------`);

let friendsArray = ["Satya", "Dipak", "kiran", "gajanan"];

friendsArray.push("Krishna");

console.log(friendsArray);

Object.freeze(friendsArray);

console.log(`------------------------ STEP-V ---------------------------------`);

console.log(`Using for of loop`);

for (const key of friendsArray) {
    
    console.log(key);
}

console.log(`------------------------ STEP-VI ---------------------------------`);

let company = "Codemind Technology";

let separate = company.split(" ");

console.log(separate);

let reverseWord = separate[1];


let finalReverse = "";


for (let i = reverseWord.length-1; i >= 0; i--) {
    
    // finalReverse += reverseWord[i];  
     finalReverse = finalReverse + reverseWord[i];
}

console.log(finalReverse);









let company1 = "Codemind Technology";
let reverseWord1 = "";

for (let i = company1.length-1; i >= 0; i--) {
    
    reverseWord1 += company1[i];
    
}

console.log(reverseWord1);