
console.log("/__________________ ASSIGNMENT NO. 1 _____________________/");

var tcsEligiblity = function(gradScore, hscScore, sscScore, candidateName) {

    // var message = (gradScore >= 70 || hscScore >= 80 || sscScore > 90)
    // ? `Congratulations, "${candidateName}", You are Eligible for the TCS interview.`
    // : `Unfortunetly, "${candidateName}", you are not Eligible for the TCS interview.  `
    
    // console.log(message);

    (gradScore >= 70 || hscScore >= 80 || sscScore >90)  
   ? console.log(`Congratulations, "${candidateName}", You are Eligible for the TCS interview.`)  
   : console.log(`Unfortunetly, "${candidateName}", you are not Eligible for the TCS interview.  `);
}

tcsEligiblity(80, 86, 90, "Prathamesh");
tcsEligiblity(70, 65, 55, "Rajlaxmi");
tcsEligiblity(60, 79, 88, "Tej");
tcsEligiblity(69, 75, 90, "Nabha");
tcsEligiblity(75, 67, 75, "Soham");
tcsEligiblity(80, 75, 95, "Naina");



console.log("/_____________________________ Assignment No. 2 _________________________/");

console.log("------------------------------- STEP-I -----------------------------------");

function maleMarriageEglibility(gender, age, boyName)
{
    gender === "Male" && age >=21 
  ? console.log(`Hey, ${boyName}, You are eligible for the marriage`) 
  : console.log(`Sorry ${boyName}, You are not eligible for the marriage`);
}

maleMarriageEglibility("Male", 25, "Bill Gates");
maleMarriageEglibility("Male", 17, "Stew Jobs");
maleMarriageEglibility("Male", 21, "Elon Musk");

console.log("------------------------------- STEP-II -----------------------------------");

function femalMarriageEligibility(gender, age, girlName) 
{
    gender === "Female" && age>= 18 ?
    console.log(`Hey, ${girlName}, You are eligible for the marriage`) :
    console.log(`Sorry ${girlName}, You are not eligible for the marriage`);    
}

femalMarriageEligibility("Female", 16, "Jenifer");
femalMarriageEligibility("Female", 27, "Malinda Gates");
femalMarriageEligibility("Female", 18, "Justine Musk");