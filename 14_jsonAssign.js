


let personOne = `{

    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["DEV", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "reffered-by": "E0012"
}`

// console.log(`Given Object is: `, personOne);
console.log(`Type of Object personOne: `, typeof personOne);

console.log(`------------------------------------------------------------------`);

const conrtPerson = JSON.parse(personOne);
console.log(`Type of new object is: `,typeof conrtPerson);
console.log(`The Convert Object is:`, conrtPerson);
// console.table(conrtPerson);

console.log(`------------------------------------------------------------------`);

console.log(conrtPerson.role);

const personRole = conrtPerson.role[0]; //access the 0th index from array

console.log(`The Given role is: `, personRole);

console.log('');


console.log(`------------------------------------------------------------------`);

const perLastName = conrtPerson.name.split(" ")[1];  //splitting the name and accessing value at index 1

console.log(perLastName);

// let personName = conrtPerson.name; // access to the given object name(Full)

// const perLastName = personName.split(" ")[1]  //this will split the name in two parts and access index value 1

console.log(`------------------------------------------------------------------`);
 

let joinDate = new Date(conrtPerson.doj) // convert the string to date form

const joinYear = joinDate.getFullYear(); // use getFullYear to access only year

console.log(`Joining Year Date is: `, joinYear);

