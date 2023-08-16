

class Shape {
    area() {
        console.log(`The area of the given shape:`);
    }
}

class Circle extends Shape {

    area(){

        console.log(`The area of the given shape:`);
        const radius = 5;

        const pi = 3.1415
        const circleArea = pi * radius ** 2;

        return circleArea;
        
    }
}

class Rectangle extends Shape {

    area(){

        console.log(`The area of the given shape:`);
        const width = 4;
        const height = 6;
        const reactAngleArea = width * height;

        return reactAngleArea;
    }
}


function calculateArea(shape) {
    return shape.area();
}


const  objCircle = new Circle();

const objRect = new Rectangle()

console.log(calculateArea(objCircle));

console.log('');

console.log(calculateArea(objRect));

// const shapeObj = new Shape();
// console.log(shapeObj.area());

console.log(`======================================================================================================`);
