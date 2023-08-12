// function num(number1, number2)
// {
//  number1++;
//  number2++;
// console.log("number1 = " +number1);
// console.log("number2 = " +number2);
// }
// let number1 = 20;
// let number2 = 40;
// num(number1, number2); // Passing arguments.
// console.log("Original number1 = " +number1);
// console.log("Original number2 = " +number2);



// function declartion

// function addNums (a, b) {

//     return a+b;
// }

// let res1  = addNums(5, 3)
// // addNums(5, 3) //function call
// console.log(res1);


// function myName(a, b){

//     var res
//     console.log('My Name is Sam');
// }

// myName();

class Car {
    brand;
    model;
    
    start() {
      console.log(`${this.brand} ${this.model} is starting.`);
    }
    
  }
  
  const myCar = new Car();
  myCar.brand = 'Toyota';
  myCar.model = 'Camry';
  
  const anotherCar = new Car();
  anotherCar.brand = 'Honda';
  anotherCar.model = 'Civic';
  
  myCar.start(); // Output: Toyota Camry is starting.
anotherCar.start();
  