

function gradeCalculation(marks) {
    
    if (marks <= 0 || marks > 100 || isNaN(marks)) {
        console.log(`Invalid Result Please provide valid Result`);
    }
    else if (marks >= 90) {
        console.log(`Fantastic Marks: "${marks}, Your Garde is A+"`);
    } 
    else if(marks >= 75 && marks < 90){
        console.log(`Excellent Marks: "${marks}, Your Garde is A"`);
    }
    else if(marks >= 50 && marks < 75){
        console.log(`Good Marks: "${marks}, Your Garde is B"`);
    }
    else if(marks >=35 && marks < 50){
        console.log(`Your Marks: "${marks}, Your Garde is C, You Need to Improve"`);
    }
    else if(marks >= 1 && marks < 35){
        console.log(`Student with marks "${marks}" if Failed...`);
    }
}

gradeCalculation(80);
console.log('');
gradeCalculation(90);
console.log('');
gradeCalculation(0);
console.log('');
gradeCalculation(150);
console.log('');
gradeCalculation(-7);
console.log('');
gradeCalculation(35);
console.log('');
gradeCalculation(25);
console.log('');
gradeCalculation(64);
console.log('');
gradeCalculation(49);
console.log('');
gradeCalculation("91");
console.log('');
gradeCalculation("Eighty");
console.log('');
gradeCalculation(undefined);
console.log('');
gradeCalculation(null);
