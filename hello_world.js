function voteEligiblity(age, name) {
    
    var ageValue = +age;
    if (age>=120 || age<=0 || isNaN(ageValue) ) {
        console.log(`${name} your age ${age} is not valid`);
        return;
    }

    else{
        if (age>=18) {
            console.log(`${name} you are eligible for voting`);            
        } else {
            console.log(`${name} you are not eligible for vote`);
        }
    }

}

voteEligiblity(26, "Anchal");
voteEligiblity(17, "Prathamesh");
voteEligiblity(-21, "Arbaz");
voteEligiblity(125, "Sid");
voteEligiblity("uk", "Rohit");
voteEligiblity("Ninty", "Atharva")