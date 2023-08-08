
console.log(`************************* Assignment Number 02 *****************************`);

console.log('');

console.log(`____________________ Step-I __________________________`);

let bankSbi = {

    bankName: "SBI Bank",
    branchCode: "SB-007",
    IFSC: "SBIN000187",
    bankTotalEmp: 180,
    bankTotalYears: 15,
    bankFounder: "Sam"
}

console.log(bankSbi);

console.log('');

console.log(`____________________ Step-II __________________________`);

let bankLocation = {

    bankStreet: "Rankala Road",
    city: "Kolhapur",
    pinCode: "416014",
    landMark: "Rankala Ganesh Temple"
}

console.log(bankLocation);

console.log('');

console.log(`____________________ Step-III __________________________`);

console.log(`------------------- Clonning Using object.assign method -----------------`);


const mergeBank = Object.assign({}, bankSbi, bankLocation);
console.log(mergeBank);
console.table(mergeBank);

console.log('');

console.log(`------------------- Clonning Using spread operator -----------------`);

const mergeBank1 = {...bankSbi, ...bankLocation};
console.log(mergeBank1);
console.table(mergeBank1);

console.log('');

console.log(`____________________ Step-IV __________________________`);

let rateOfInterest = {

    homeLoanInterest: "7.5%",
    personalLoanInterest: "12.5%",
    dueInterest: "17.2%"
}

console.log(rateOfInterest);

console.log('');

console.log(`____________________ Step-V __________________________`);

const sbiDetails = {

    ...bankSbi,
    ...bankLocation,
    ...rateOfInterest
}

console.log(sbiDetails);
console.table(sbiDetails);

console.log('');

console.log(`____________________ Step-VI __________________________`);

for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty.call(sbiDetails, key)) {
        
        console.log(`${key} ==> ${sbiDetails[key]}`);
    }
}
