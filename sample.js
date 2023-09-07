class Car {
    constructor(make, model, year, price) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
    }
  }
  
  // Create an array of Car objects
  const cars = [
    new Car("Toyota", "Camry", 2020, 25000),
    new Car("Honda", "Civic", 2019, 22000),
    new Car("Ford", "Mustang", 2021, 40000),
    new Car("Chevrolet", "Cruze", 2018, 18000),
    new Car("Nissan", "Altima", 2022, 27000),
  ];
  
  // Problem 1: Use map to create an array of car models
  const carModels = cars.map(car => car.model);
  console.log("Problem 1: Array of car models");
  console.log(carModels);
  
  // Problem 2: Use filter to find cars with a price less than $25,000
  const affordableCars = cars.filter(car => car.price < 25000);
  console.log("\nProblem 2: Array of cars priced under $25,000");
  console.log(affordableCars);
  
  // Problem 3: Use map to calculate the age of each car
  const currentYear = new Date().getFullYear();
  const carAges = cars.map(car => currentYear - car.year);
  console.log("\nProblem 3: Array of car ages");
  console.log(carAges);
  
  // Problem 4: Use filter to find cars manufactured in 2020
  const carsManufacturedIn2020 = cars.filter(car => car.year === 2020);
  console.log("\nProblem 4: Array of cars manufactured in 2020");
  console.log(carsManufacturedIn2020);

  