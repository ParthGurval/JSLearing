

// const person = {

//     name: "Satya",
//     age: 39,
//     city: "Pune"
// };

// for (const key in person) {
    
//     console.log(`${key}==> ${person[key]}`);
// }




// const collegeObj = [1, "yellow", "green"];

// for (const color for collegeObj) {
    
//     console.log(color);
// }


function fun1() {
    let a = 5;

    function fun2() {
        var student = {
            firstName: "Swapnil",
            lastName: "Barangule",
        
            getFullName() {
                return `${this.firstName} ${this.lastName}`;
            }
        };
        
        function displayName() {
            console.log("Full Name:", student.getFullName());
        }
        
        displayName();
    }
    
    console.log(a);
    fun2();
}

fun1();
