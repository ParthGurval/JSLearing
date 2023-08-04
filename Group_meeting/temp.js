



const professor ={

    profName: "Sameer Patil",
    profAge: 40,
    profContact: 956413254864,
    profSalary: 600000,
    profEmail: "Sammer@gmail.com",

    profDegree: {

        ening: "CSE-B.tech",
        mastegineerrs: "Embedded Systems",
        phd: "Adv Computing System",
        catExam: "AIR-98",

        getDegree: function(){

           return `Teacher Degrees: ${this.ening}, ${this.mastegineerrs}, ${this.phd}, ${this.catExam}`
        }
    },

    certificate: ["Hacker Rank Participation", "IFE certification", "Adv python certification", "Degree", "PHD"], 

}



console.log(`--------------------------------- Step-I ---------------------------------------------------------`);

console.log(professor);

console.log(`--------------------------------- Step-I ---------------------------------------------------------`);

console.log(professor.profDegree);

console.log(`--------------------------------- Step-I ---------------------------------------------------------`);

console.log(professor.profDegree.getDegree());

console.log(`--------------------------------- Step-I ---------------------------------------------------------`);

console.log(`The added value is: professor.totalExp: ${professor.totalExp= "14 Years"}`);
console.log(professor);

console.log(`--------------------------------- Step-I ---------------------------------------------------------`);

professor.profSalary = 800000;
console.log(`The changed value is: professor.profSalary ${professor.profSalary}`);
console.log(professor);

console.log(`--------------------------------- Step-I ---------------------------------------------------------`);

professor.certificate.push("Oracle Certificate");
console.log(professor.certificate);

console.log(`--------------------------------- Step-I ---------------------------------------------------------`);

console.log(professor.certificate.slice(-1)[0]);

console.log('');

console.log(professor.certificate[professor.certificate.length-1]);