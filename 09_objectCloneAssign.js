
console.log(`***************************** Assignment No.2 *********************************`);

console.log('');

console.log(`---------------------------- STEP-I ------------------------------------`);

const arrayNum = [20, 30, 4, 56, 90, 400, 49];
console.log(`Origional array=> arrayNum:`); 
console.log(arrayNum);

const arrayShallow = arrayNum;
console.log(`Cloned array=> arrayShallow:`);
console.log(arrayShallow);

arrayShallow.push(55, 66);
console.log(`Updated Cloned array=> arrayShallow:}`);
console.log(arrayShallow);

console.log('');

console.log(`---------------------------- STEP-II ------------------------------------`);

console.log(`Origional array=> arrayNum:`);
console.log(arrayNum);

const deepCloneArray = [...arrayNum];
console.log(`Deep Clone array=> deepCloneArray:`);
console.log(deepCloneArray);
arrayNum.push(10, 25);
console.log(`Updated Original array=> arrayNum`);
console.log(arrayNum);

console.log('');

console.log(`---------------------------- STEP-III ------------------------------------`);

const arrayEven = [2, 30, 14, 8];
console.log(`Even Array is:`);
console.log(arrayEven);
const mergeArray = [...arrayNum, ...arrayEven];
console.log(`The Merged Array is:`);
console.log(mergeArray);

console.log('');

console.log(`---------------------------- STEP-IV ------------------------------------`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary:{
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR"
    },
    address: {
        locality:{
            colony: "OM Varindavan Society",
            street: "Kanch Pokali, 431202",
        },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
    },
    mobile: ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"]
}

console.log(employee_info);

// const mergeDetails = {...employee_info.address, ...employee_info.address.locality};
// console.log(mergeDetails);
// console.table(mergeDetails);

console.log(`---------------------------- STEP-V ------------------------------------`);

console.log(`Employee Address: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country} `);

console.log(`Mobile Number: ${employee_info.mobile.join(', ')}`);

console.log(`---------------------------- STEP-VI ------------------------------------`);

const dpCloneEmp = JSON.parse(JSON.stringify(employee_info));

console.log(dpCloneEmp);

console.log('');

console.log("Before dpCloneEmp July Salary:", dpCloneEmp.salary.july_month);

console.log('');

console.log("Country from Original Object: ", employee_info.address.country);

dpCloneEmp.salary.july_month = "80,000INR";

employee_info.address.country = "United Kingdom";

console.log('');

console.log("After July Salray Change: ", dpCloneEmp.salary.july_month);

console.log('');

console.log("After Country Change: ", employee_info.address.country);