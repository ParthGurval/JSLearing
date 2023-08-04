

const sbiBank = {

    bankName: "SBI Bank",
    location: "Pune",
    accNumber: "00035868749",
    ifsc:       "SBIN0007569",
    interestRate: "11.05 p.a*",

    showDetails(){
        console.log(`The Overall Bank Details of SBI are: ${this.bankName}, ${this.location}, ${this.accNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}

const axisBank = {
    
    bankName: "AXIS Bank",
    location: "Mumbai",
    accNumber: "235465587",
    ifsc:       "AXIS0006578",
    interestRate: "3.05 p.a*",

    showDetails(){
        console.log(`The Overall Bank Details of SBI are: ${this.bankName}, ${this.location}, ${this.accNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
    
}

const hdfcBank = {
    
    bankName: "HDFC Bank",
    location: "Kolhapur",
    accNumber: "154625479258",
    ifsc:       "HDFC00008567",
    interestRate: "7.25 p.a*",

    showDetails(){
        console.log(`The Overall Bank Details of SBI are: ${this.bankName}, ${this.location}, ${this.accNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
    
}

const yesBank = {
    
    bankName: "YES Bank",
    location: "Dubai",
    accNumber: "89753132878",
    ifsc:       "YESB00056789",
    interestRate: "6.50 p.a*",

    showDetails(){
        console.log(`The Overall Bank Details of SBI are: ${this.bankName}, ${this.location}, ${this.accNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
    
}



sbiBank.showDetails();

console.log(`__________________________________________________________________`);

axisBank.showDetails();

console.log(`__________________________________________________________________`);

hdfcBank.showDetails();

console.log(`__________________________________________________________________`);

yesBank.showDetails();





console.log(`____________________________ EXTRA ______________________________________`);

console.log('');

console.log(sbiBank);

console.log('');

console.log(axisBank);

console.log('');

console.log(hdfcBank);

console.log('');

console.log(yesBank);