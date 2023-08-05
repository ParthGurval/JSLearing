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
  
  console.log("\nCar 1 Properties:");
  for (let key in car1) {
    if (car1.hasOwnProperty(car1.getCarDetails())) {
      console.log(`${key} ==> ${car1[key]}`);
    }
  }
  
  console.log("\nCar 2 Properties:");
  for (let key in car2) {
    if (car2.hasOwnProperty(car2.getCarDetails())) {
      console.log(`${key} ==> ${car2[key]}`);
    }
  }
  
  console.log("\nCar 3 Properties:");
  for (let key in car3) {
    if (car3.hasOwnProperty(car3.getCarDetails())) {
      console.log(`${key} ==> ${car3[key]}`);
    }
  }