

var voteEligible = function(age){
    
    var result = +age
    if (age<=0 || age>=130 || isNaN(result)) {
        console.log(`The given value ${age} is Not Valid, Please Enter Correct Value`);
    } else {
        
        if (age>=18) {
            console.log(`As your age is ${age}, You are Eligible for voting`);
        } else {
            console.log(`As your age is ${age}, You are not Eligible for voting`);
        }
    }
}

voteEligible(45);
console.log('');
voteEligible(17);
console.log('');
voteEligible(8);
console.log('');
voteEligible(20);
console.log('');
voteEligible(-10);
console.log('');
voteEligible(200);
console.log('');
voteEligible(0);
console.log('');
voteEligible(undefined);
console.log('');
voteEligible(null);