
let year = 2000

var dayYearCount = function (month) {

    switch (month) {
        //For month of 31 days 
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:

            dayCount = 31;
            break;

        //For month of 30 days 
        case 4:
        case 6:
        case 9:
        case 11:

            dayCount = 30;
            break;

        //For Leap Year
        case 2:
            if((year % 4 == 0 && !(year % 100 == 0) || year % 400 == 0)){
                dayCount = 29;
            }
            break;
        
    
        default:
            dayCount = -1  //here -1 is a Invalid Input
            break;
    }

    console.log(dayCount);

}

dayYearCount(12);
console.log('');
dayYearCount(2);
console.log('');
dayYearCount(5);
console.log('');
dayYearCount(4);
console.log('');
dayYearCount(null);
console.log('');
dayYearCount("One");
console.log('');
dayYearCount(-12);
