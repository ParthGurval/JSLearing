


function greet(callback){

    console.log(`Good Moring`);
    callback();

    let inner = function(){
        console.log(`Thank you`);
    }

    return inner;
}

function inquire(){

    console.log(`How are you`);
}

greet(inquire)();



console.log('----------------------------------------');

const arrayNum = [75, 85, 62, 10, 1, 2, 20, 26, 23];

const res = arrayNum.sort((a,b) => a-b);

console.log(res);