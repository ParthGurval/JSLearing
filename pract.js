// // //Assignment on this--> use add block to add given numbers...
// // function add(num1, num2=1){
// //     // console.log(`num1 ${num1},  num2 ${num2}`);
// //     // console.log(num2);
// //     console.log(num1/num2);
// // }

// // add(9);
// // add(78);


// let stud = {

//     rollNum: 100101,
//     state: "MH",
//     city: "Pune",
//     college: "MIT"
// }

// // let state = stud.state;
// // let college = stud.college;
// // let city = stud.city;

// const {state, college, city, pin} = stud;

// console.log(state, college, city, pin);


// // let array = [4, 5, 6];

// // // 
// // let [num1, num2, num3] = array;
// // console.log(num1, num2, num3, num4);



function show(){

    console.log(`Inide show`);
}

show();

//self Invoking Function 

(function(){
    console.log(`Inside Display`);
})()