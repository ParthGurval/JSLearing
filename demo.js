// function swap(n1, n2){ // n1, n2 arguments or parameters n1=100   n2=200
//     console.log('Inside swap function');
//     console.log('Before Swap=> n1', n1, " n2", n2 );
//     var temp = n1;
//     n1 = n2;
//     n2 = temp;
//     console.log('After Swap=> n1', n1, " n2", n2 );
// }
// var num1 = 100;
// var num2 = 200;
// swap(num1, num2);// Function call or invocation

// var sweety = "Sweety";
// var cutie = "Cutey";
// swap(sweety, cutie);

// var name1 = "Virat";
// var name2 = "Anushka";
// swap(name1, name2);
// console.log('End of program');

// function check(value) {
//     console.log('hello', check);
//     console.log(typeof check);
// }



// Function with no argument and no return value
function show(){
    console.log('My name is Gajanan');
    console.log('I am Technical lead');
    console.log('My tech skill is - Java + Angular + React + DevOps + ');
}
show(); // Function Invocation

// Function with argument and no return value 
function checkType(value){ // var value;
    console.log('Value is', value);
    console.log('Type is: ', typeof value);
    console.log('-------------------------');
}
checkType(100);
checkType("GK");
checkType(true);
checkType(undefined);
checkType(null);
checkType();

// Function with argument and return value
function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addition(10, 23, 456);
console.log('Result is ', res);
var rest= addition(-56, 239, 677);
console.log('result is:', rest);
var res = addition(10, 80);
console.log('Result is:', res);



