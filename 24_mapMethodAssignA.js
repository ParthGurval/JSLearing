
console.log(`====================== Assignment Number 01 =============================`);
const arryNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`The Given Array is:`, arryNumbers);

console.log(`-----------------------------------------------------------`);

//Add 10 into each element and log new array on console

const result1 = arryNumbers.map((currVal)=>{

    return currVal +10;
});

console.log(result1);

console.log(`-----------------------------------------------------------`);

//cube the each element of array and log on console

const result2 = arryNumbers.map((currntVal)=>{

    return currntVal ** 3;
});

console.log(result2);

console.log(`-----------------------------------------------------------`);

// Add the index value to corresponding each array element and log new array result on console

const result3 = arryNumbers.map((element, index) => {

    return element + index;
});

console.log(result3);

console.log('');

console.log(`====================== Assignment Number 02 =============================`);

class Employee{
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
    }
    
    
    const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
    const emp_radha = new Employee(33, "Radha", "HR", 74080, "Wipro");
    const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
    const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
    const emp_gonika = new Employee(77, "Monika", "IT", 48080, "Wipro");
    const emp_viny = new Employee(88, "Vinayak" , "IT", 75808, "TCS");
    const emp_mahi = new Employee(99, "Mahesh", "HR", 85101, "Infy");

    const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_gonika, emp_viny, emp_mahi];

 //1. Get the list of employee names and log on the console

    const allEmpNames = arrayEmployees.map((empl) => {

        return empl.emp_name
    });

    
    // const allEmpNames2 = arrayEmployees.map(empl => empl.emp_name);
    console.log(`The Name of all Emplyees Are:`,allEmpNames);

    console.log(`-----------------------------------------------------------`);

 //2. Get the list of department and log on the console

    const deplist = arrayEmployees.map(empDep => empDep.emp_dept);

    console.log(`The Department of all Emplyees are:`,deplist);

    console.log(`-----------------------------------------------------------`);

 //3. Get the list of employee id's and log on the console

    const allEmpId = arrayEmployees.map(empId => empId.emp_id);
    console.log(`The ID's of all Employees are:`,allEmpId);

console.log('');

console.log(`====================== Assignment Number 03 =============================`);

const filterArray= [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`The Given Array is:`, filterArray);

//1. Find out all numbers which are greater than 50 and log on console

const grtNum = filterArray.filter((element)=>{

    return element > 50;
});

console.log(`The Numbers which are greater than 50 are:`, grtNum);

console.log(`-----------------------------------------------------------`);

//2. Find out all the even numbers and log on console

const evenNum = filterArray.filter((elem) => {

    return elem % 2 ==0;
});

console.log(`The Even numbers from array are:`, evenNum);

console.log(`-----------------------------------------------------------`);

//3. Find out all the odd numbers and log on console

const oddNum = filterArray.filter((elem) => {

    return elem % 2 !==0;
});

console.log(`The Even numbers from array are:`, oddNum);

console.log(`-----------------------------------------------------------`);

//4. Find out all the numbers which are multiple of 5 and log on console

const multiNum = filterArray.filter((arrEle) => {

    return arrEle % 5 ==0;
});

console.log(`The numbers which are multiple of 5 from array are:`, multiNum);


console.log(`-----------------------------------------------------------`);
//5. Find out all the numbers which are between 20 and 50 and log on console

const arrRange = filterArray.filter((rangeNum) => {

    return rangeNum > 20 && rangeNum < 50;
});

console.log(`The Numbers Between 20 to 50 are:`, arrRange);