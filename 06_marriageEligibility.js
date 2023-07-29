 

 function marriageEligible(gender, age) {
    
    if (typeof gender !== 'string' || typeof age !== 'number' || isNaN(age) || gender == "Other") {
        console.log(`"${gender}, ${age}" Are Invalid Input --> Please Enter The Valid inputs...!`);
    }

    else if (gender == "Male" && age >=21) {
        console.log(`As You are a Male and age your is "${age}", You are Eligible for the marriage`);
    }
    
    else if (gender == "Female" && age >= 18) {
        console.log(`As You are a Female and age your is "${age}", You are Eligible for the marriage`);
    }

    else if (gender == "Male" && age < 21 || gender == "Female" && age < 18){
        console.log(`As You are a Male and age your is "${age}", You are Not Eligible for the marriage`);
    } 
        console.log(`___________________________________________________________________________`);
 }

 marriageEligible("Male", 17);
 marriageEligible("Male", 25);
 marriageEligible("Female", 28);
 marriageEligible("Female", 17);
 marriageEligible("Other", 35);
 marriageEligible("Other", 41);
 marriageEligible(null, 29);
 marriageEligible("Male",undefined);