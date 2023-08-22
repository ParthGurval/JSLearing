

console.log(`___________________________________ Assignment Number 01 _____________________________________`);
console.log('');

console.log(`-------------------- Step-I-------------------------`);
const arrowFun = () => {

    console.log(`"Good Morning, Today is Tuesday"`);
}

arrowFun();

console.log(`-------------------- Step-II-------------------------`);
const multi = (num1, num2, num3=1) => {

    let result = num1 * num2 * num3;

    console.log(`The Multiplecation of (${num1}, ${num2}, ${num3}) is: ${result}`);
}

multi(5, 5, 2);
multi(10, 4);   

console.log(`-------------------- Step-III-------------------------`);

const addBlock = (arg1, arg2, arg3, arg4, arg5) => {

    return arg1 + arg2 + arg3 + arg4 + arg5;
}

const res1 = addBlock(100, 100, 200, 349, 756);

const res2 = addBlock("I am ", "learning ", "ES6 ", "features ", "in depth.");

console.log(`The Addition of Given Input is: ${res1}`);
console.log(`The concatenation of Given Input is: ${res2}`);

console.log('');



console.log(`___________________________________ Assignment Number 02 _____________________________________`);
console.log('');


class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 42000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


//created array 

console.log(`----------Create An Array---------`);

const empArray = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(empArray);

console.log(`-------------------- Step-I-------------------------`);

//using for of loop

for (const employee of empArray) {
    
    if (employee.emp_company === "TCS") {
        
        console.log(`The Name of Employee is: "${employee.emp_name}", Working Company Name is: "${employee.emp_company}"`);
    }
}

// using for in loop

// console.log('using for in loop');

// for (const i in empArray) {

//     const tcsEmp = empArray[i];

//     if (tcsEmp.emp_company === "TCS") {
        
//         console.log(`The Name of Employee is: "${tcsEmp.emp_name}", Working Company Name is: "${tcsEmp.emp_company}"`);
//     }
// }

// using arrow function

// console.log('Using For Each method');

// const tcsEmployees = empArray.filter(findEmployee => findEmployee.emp_company === "TCS");

// tcsEmployees.forEach(findEmployee => {

//     console.log(`The Name of Employee is: "${findEmployee.emp_name}", Working Company Name is: "${findEmployee.emp_company}"`);
// });


console.log(`-------------------- Step-II-------------------------`);

for (const inx of empArray) {

    if (inx.emp_dept === "Finance") {
        
        console.log(`The Name of Employee is: "${inx.emp_name}", The Department is: "${inx.emp_dept}"`);
    }
    
}

// using for in loop

// console.log('using for in loop');

// for (const i in empArray) {

//     const tcsEmp = empArray[i];

//     if (tcsEmp.emp_dept === "Finance") {
        
//         console.log(`The Name of Employee is: "${tcsEmp.emp_name}", Working Company Name is: "${tcsEmp.emp_dept}"`);
//     }
// }



// using arrow function nd For Each loop

// console.log('Using For Each method');

// const tcsEmployees = empArray.filter(findEmployee => findEmployee.emp_dept === "Finance");

// tcsEmployees.forEach(findEmployee => {

//     console.log(`The Name of Employee is: "${findEmployee.emp_name}", Working Company Name is: "${findEmployee.emp_dept}"`);
// });


console.log(`-------------------- Step-III-------------------------`);

for (const empR of empArray) {
    
    if (empR.emp_name.startsWith("R")) {
        
        console.log(`Employee Name: "${empR.emp_name}", Employee Id: ${empR.emp_id}, Employee Dept: ${empR.emp_dept}, Employee Salary: ${empR.emp_salary}, Employee Company: ${empR.emp_company}`);
    }
}

// for in loop

// for (const index in empArray) {
//     const employee = empArray[index];
//     if (employee.emp_name.startsWith("R")) {
//         console.log("Employee Details:");
//         console.log(`Employee ID: ${employee.emp_id}`);
//         console.log(`Employee Name: ${employee.emp_name}`);
//         console.log(`Employee Department: ${employee.emp_dept}`);
//         console.log(`Employee Salary: ${employee.emp_salary}`);
//         console.log(`Employee Company: ${employee.emp_company}`);
//         console.log("----------------------");
//     }
// }


// using arrow functiom

// empArray.forEach(employee => {
//     if (employee.emp_name.startsWith("R")) {
//         console.log("Employee Details:");
//         console.log(`Employee ID: ${employee.emp_id}`);
//         console.log(`Employee Name: ${employee.emp_name}`);
//         console.log(`Employee Department: ${employee.emp_dept}`);
//         console.log(`Employee Salary: ${employee.emp_salary}`);
//         console.log(`Employee Company: ${employee.emp_company}`);
//         console.log("----------------------");
//     }
// });

console.log(`-------------------- Step-IV-------------------------`);

for (const sal of empArray) {
    
    if (sal.emp_salary > 75000) {
        
        console.log(`Employee Name: ${sal.emp_name}, Employee Company: ${sal.emp_company}, Employee Salary: ${sal.emp_salary}`);
    }
}

// for in

// for (const index in empArray) {
//     const employee = empArray[index];
//     if (employee.emp_salary > 75000) {
//         console.log(`Employee Name: ${employee.emp_name}`);
//         console.log(`Company Name: ${employee.emp_company}`);
//         console.log(`Salary: ${employee.emp_salary}`);
//         console.log("----------------------");
//     }
// }


// arrow funtn

// empArray.forEach(employee => {
//     if (employee.emp_salary > 75000) {
//         console.log(`Employee Name: ${employee.emp_name}`);
//         console.log(`Company Name: ${employee.emp_company}`);
//         console.log(`Salary: ${employee.emp_salary}`);
//         console.log("----------------------");
//     }
// });

console.log(`-------------------- Step V ---------------------------`);

for (const sal of empArray) {
    
    if (sal.emp_salary >= 50000 && sal.emp_dept === "IT") {
        
        console.log(`Employee Name: "${sal.emp_name}", Employee Id: ${sal.emp_id}, Employee Dept: ${sal.emp_dept}, Employee Salary: ${sal.emp_salary}, Employee Company: ${sal.emp_company}`);
    }
}

// for in 

// for (const index in empArray) {
//     const employee = empArray[index];
//     if (employee.emp_salary >= 50000 && employee.emp_dept === "IT") {
//         console.log(`Employee Name: ${employee.emp_name}`);
//         console.log(`Company Name: ${employee.emp_company}`);
//         console.log(`Salary: ${employee.emp_salary}`);
//         console.log("----------------------");
//     }
// }

//arrow function

// empArray.forEach(employee => {
//     if (employee.emp_salary >= 50000 && employee.emp_dept === "IT") {
//         console.log(`Employee Name: ${employee.emp_name}`);
//         console.log(`Company Name: ${employee.emp_company}`);
//         console.log(`Salary: ${employee.emp_salary}`);
//         console.log("----------------------");
//     }
// });

console.log(`-------------------- Step VI ---------------------------`);

for (const empInfy of empArray) {
    
    if (empInfy.emp_company === "Infy") {
        console.log(`Employee Name: "${empInfy.emp_name}", Employee Id: ${empInfy.emp_id}, Employee Dept: ${empInfy.emp_dept}, Employee Salary: ${empInfy.emp_salary}, Employee Company: ${empInfy.emp_company}`);

    }
}

//for in
// for (const index in empArray) {
//     const employee = empArray[index];
//     if (employee.emp_company === "Infy") {
//         console.log("Employee Details:");
//         console.log(`Employee ID: ${employee.emp_id}`);
//         console.log(`Employee Name: ${employee.emp_name}`);
//         console.log(`Employee Department: ${employee.emp_dept}`);
//         console.log(`Employee Salary: ${employee.emp_salary}`);
//         console.log(`Employee Company: ${employee.emp_company}`);
//         console.log("----------------------");
//     }
// }


//arrow function
// empArray.forEach(employee => {
//     if (employee.emp_company === "Infy") {
//         console.log("Employee Details:");
//         console.log(`Employee ID: ${employee.emp_id}`);
//         console.log(`Employee Name: ${employee.emp_name}`);
//         console.log(`Employee Department: ${employee.emp_dept}`);
//         console.log(`Employee Salary: ${employee.emp_salary}`);
//         console.log(`Employee Company: ${employee.emp_company}`);
//         console.log("----------------------");
//     }
// });