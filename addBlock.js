

function add(num1, num2, ...num){

    console.log(`The Given Values Are "(${num1},${num2},${num})"`);

    const res = num1 + num2;

    let addNum = 0;

    for (const number of num) {
        
        addNum += number;
    }

    const finalResult = res + addNum;
    
    console.log(`The Addition of the Given Values is: "${finalResult}"`);

    console.log(`-------------------------------------------`);
}

add(5,5);

add(5,6,7);

add(45, 45, 90);

add(5);

add(15, 25, 30, 10, 20, 30, 60, 90)