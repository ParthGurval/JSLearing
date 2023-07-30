

var leapYear = function(year){

    if(isNaN(year) || typeof year !== 'number'){
        console.log(`${year} Is a Invalid Input --> Please Give the valid Inputs`);
    }

    else if((year % 4 == 0) || (year % 100 !== 0) && (year % 400 == 0)){
        console.log(`"${year}" is a Leap Year`);
    }

    else{
        console.log(`"${year}" is a Not a Leap Year`);
    }

    console.log(`-----------------------------------------`);
}

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
leapYear("2020");

