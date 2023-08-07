// Car Objects
const car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White",
    price: 25000,
    features: ["Airbags", "100 in 10 sec", "suspension"],
    getCarDetails: function () {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`;
    },
  };
  
  const car2 = {
    make: "Honda",
    model: "Accord",
    year: 2021,
    color: "Blue",
    price: 27000,
    features: ["suspension", "Top speed 400", "5 seater"],
    getCarDetails: function () {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`;
    },
  };
  
  const car3 = {
    make: "Ford",
    model: "F-150",
    year: 2023,
    color: "Black",
    price: 35000,
    features: ["100 in 3.5 sec", "Star Roof", "Best exust sound"],
    getCarDetails: function () {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`;
    },
  };

console.log(car1);
console.log(car2);
console.log(car3);

console.log(`-------------------------------------------------------------------------------------`);

console.log(car1.features);
console.log(car2.features);
console.log(car3.features);

console.log(`-------------------------------------------------------------------------------------`);
  
  // Add features to each car's features array
  car1.features.push("GPS", "Bluetooth", "Backup Camera");
  car2.features.push("Sunroof", "Lane Departure Warning", "Apple CarPlay");
  car3.features.push("Leather Seats", "Heated Steering Wheel", "Rear Spoiler");

  console.log(car1.features);
  console.log(car2.features);
  console.log(car3.features);

  console.log(`-------------------------------------------------------------------------------------`);

  
  // Perform array operations
  console.log("Car 1 Features:", car1.features);
  car1.features.pop(); // Remove the last feature
  console.log(car1.features);
  car1.features.shift(); // Remove the first feature
  console.log(car1.features);
  car1.features.unshift("Tinted Windows"); // Add a new feature to the beginning
  console.log(car1.features);
  car1.features.splice(1, 1); // Remove a specific feature using splice
  console.log(car1.features);
  const car1SubsetFeatures = car1.features.slice(0, 2); // Create a new array with a subset of features
  
  console.log("Car 1 Updated Features:", car1.features);
  
  console.log("Car 2 Features:", car2.features);
  car2.features.pop(); // Remove the last feature
  car2.features.unshift("Navigation System"); // Add a new feature to the beginning
  const car2SubsetFeatures = car2.features.slice(0, 2); // Create a new array with a subset of features
  
  console.log("Car 2 Updated Features:", car2.features);
  
  console.log("Car 3 Features:", car3.features);
  car3.features.shift(); // Remove the first feature
  const car3SubsetFeatures = car3.features.slice(1); // Create a new array with a subset of features
  
  console.log("Car 3 Updated Features:", car3.features);

console.log(`-------------------------------------------------------------------------------------`);
  
  // Display keys and values of each car object separately using for...in loop

  console.log("\nCar 1 Properties:");
  for (const key in car1) {
    if (typeof car1[key] !== "function") {
      console.log(`${key} ==> ${car1[key]}`);
      
    }
  }
  
  console.log("\nCar 2 Properties:");
  for (const key in car2) {
    if (typeof car2[key] !== "function") {
      console.log(`${key} ==> ${car2[key]}`);
      
    }
  }
  
  console.log("\nCar 3 Properties:");
  for (const key in car3) {
    if (typeof car3[key] !== "function") {
      console.log(`${key} ==> ${car3[key]}`);
      
    }
  }
  
  // Freeze the car objects
  Object.freeze(car1);
  Object.freeze(car2);
  Object.freeze(car3);
  
  // Attempt to modify car properties after freezing the objects
  car1.make = "Lexus"; // Attempt to modify 'make' property
  car2.color = "Silver"; // Attempt to modify 'color' property
  car3.year = 2024; // Attempt to modify 'year' property
  
  // Log the car objects after freezing
  console.log("\nCar 1 Properties after Freezing:", car1);
  console.log("\nCar 2 Properties after Freezing:", car2);
  console.log("\nCar 3 Properties after Freezing:", car3);
  


