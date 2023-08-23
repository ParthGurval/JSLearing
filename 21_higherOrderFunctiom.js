


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