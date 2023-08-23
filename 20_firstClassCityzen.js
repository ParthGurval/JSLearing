

function show(){

    console.log(`Show Function`);

    let innerFun =function(){

        console.log(`Inside inner funtn`);
    }

    return innerFun;
}

show()

// let inner = show();

