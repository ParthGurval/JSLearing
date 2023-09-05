


class Person {

    constructor(f_name, l_name){

        this.f_name = f_name;
        this.l_name = l_name;
    }
}

const person1 = new Person("Jenny", "Bruce");

console.log(person1.f_name, person1.l_name);


function Person4(fi_name, ls_name){

    this.fi_name = fi_name;
    this.ls_name = ls_name;
    this.resFun = function(){
        console.log(`First Name is ${this.fi_name}, Last Name is ${this.ls_name}`);
    }
}

const personRes1 = new Person4("Satya", "Nadela");

personRes1.resFun();


const objPerson = {

    fname: "Narendra",
    lname: "Modi",

    concateVal: function(){
        console.log(`First Name: ${this.fname}, Last Name: ${this.lname}`);
    }
}

objPerson.concateVal();