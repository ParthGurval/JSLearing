


function marriageEligible(gender, age) {
    
    if (typeof gender !== 'string' || typeof age !== 'number' || isNaN(age) || gender == "Other" ) {
        console.log(`${gender, age} are  Invalid Inputs`);
    }

    else if (gender == "Male" && age >= 21) {
        
        console.log(`As your gender is ${gender}, and your age is "${age}, You are Eligible for Marriage`);
    }

    else if (gender == "Female" && age >= 18) {
        
        console.log(`As your gender is ${gender}, and your age is "${age}, You are Eligible for Marriage`);
    }

    else if (gender == "Male" && age < 21 || gender == "Female" && age < 18) {
        
        console.log(`As your gender is ${gender}, and your age is "${age}, You are Not Eligible for Marriage`);
    }

    console.log(`---------------------------------------------------------------`);
}

marriageEligible("Male", 17);
marriageEligible("Male", 25);
marriageEligible("Female", 28);
marriageEligible("Female", 16);
marriageEligible("Other", 35);
marriageEligible("Other", 41);
marriageEligible("Male", null);