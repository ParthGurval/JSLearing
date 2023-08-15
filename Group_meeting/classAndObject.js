


class car {

    brand;
    model;

    startCar()
    {
        console.log(`The Given Car is: ${this.brand}, ${this.model}`);
    }
}

const personCar = new car();

personCar.brand = 'Mercedes';
personCar.model = 'G63';
personCar.startCar();

console.log(`-----------------------------------------------------`);

personCar.brand = 'BMW';
personCar.model = '3 Series';


personCar.startCar();
