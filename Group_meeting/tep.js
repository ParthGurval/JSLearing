
console.log(`******************************* TASK-II *************************************`);


class college {

    collegeName
    collegeType
    collegeLocation
    totalNumberOfStudents

    constructor(clgName, clgType, clgLocation, studNumbers){

        this.collegeName = clgName;
        this.collegeType = clgType;
        this.collegeLocation = clgLocation
        this.totalNumberOfStudents = studNumbers;
    }

    displayCollege(){

        console.log(`The College Details are as follows: 
                    College Name: ${this.collegeName}, College Type/ University: ${this.collegeType},
                    College Location: ${this.collegeLocation}, College Total Number Of Students: ${this.totalNumberOfStudents}`);
                    
                    console.log(`-----------------------------------------------------------------------------------------------------`);
    }
}

let college1 = new college("KITS College", "Engineering Autonomus", "Kolhapur", 20000);
// console.log(college1);
college1.displayCollege();

let college2 = new college("MIT", "Engineering Autonomus", "USA", 150000);
// console.log(college2);
college2.displayCollege();

let college3 = new college("Cambridge", "Engineering College, Autonomus University", "UK", 120000);
// console.log(college3);
college3.displayCollege();

console.log('');




console.log(`******************************* TASK-II *************************************`);


function traverseObject(collegeObj){

    for (const college in collegeObj) {
        if (Object.hasOwnProperty.call(collegeObj, college)) {
            const element = collegeObj[college];

            console.log(`The Given College Details: ${college} ==> ${element} `);
            
        }
    }

    console.log(`-------------------------------------------------------------------------------`);
}

traverseObject(college1);
traverseObject(college2);
traverseObject(college3)