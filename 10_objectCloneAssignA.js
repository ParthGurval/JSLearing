
console.log(`************************* Assignment Number 01 *****************************`);

console.log('');

console.log(`____________________ Step-I __________________________`);

let personalDetails = {

    fullName: "Parth Gurval",
    age: 22,
    homeTown: "Kolhapur",
    hobby: "Coding & Web Development",
    sports: "Cricket",
    yearlyEarning: 7500000,
}

console.log(personalDetails);

console.log('');

console.log(`____________________ Step-II __________________________`);

let collegeDetails = {

    collegeName: "KITCOEK",    
    highEducation: "B.TECH",
    specialization: "CSE",
    rollNum: 1819000272,
    collegeRank: 10

}

console.log(collegeDetails);

console.log('');

console.log(`____________________ Step-III __________________________`);

let mergedDetaills = Object.assign({}, personalDetails, collegeDetails);
console.log(mergedDetaills);
console.log('');
console.table(mergedDetaills);

console.log(`____________________ Step-IV __________________________`);

let friendsArray = ["Tej", "Devraj", "Siddhant", "Nabha", "Anchal", "Vanshika"];

Object.freeze(friendsArray);

console.log(friendsArray);

console.log(`____________________ Step-V __________________________`);

console.log(`Using For Of Loop`);

for (const key of friendsArray) {    
    console.log(key);
}

// friendsArray.push("Krishnaraj");
// console.log(friendsArray);

console.log(`____________________ Step-VI __________________________`);

let company = "Codemind Technology";
let separate = company.split(" "); //split the given string into array of words

let reverseWord = separate[1]; //with index value get the word technology

let finalReverse = "";

for (let i = reverseWord.length-1; i >= 0; i--) {
    
    // const element = array[i];
    finalReverse += reverseWord[i];   //finalReverse = finalreverse.concat(reverseWord[i])
}

console.log(finalReverse);


// console.log(`For Whole String`);

// let company1 = "Codemind Technology";
// let reverseWord1 = "";

// for (let i = company1.length-1; i >= 0; i--) {
    
//     reverseWord1 += company[i];  //reverseWord1 = reverseWord1 + company1[i];
// }

// console.log(reverseWord1);


