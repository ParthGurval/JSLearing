
console.log(`/______________________ ASSIGNMENT NO. 02 ____________________________/`);
console.log('');

console.log(`------------------------ Reverse String Code ------------------------`);
console.log('');

console.log(`------------------------ Using For Loop ----------------------------`);
console.log('');


function reverseString(str){

    let res2 = ""; // Initialize an empty string to store the reversed characters

    for (let index = str.length-1; index >= 0; index--) {
        
        const res1 = str.charAt(index);
        
        if (res1 !== ' ') {
            res2 += res1;  // Concatenate the character to the reversedStr   
        }
    }

    console.log(`The Given String is: "${str}" & It's Reverse String is:" ${res2}"`);
}

console.log(`________________________ String No. 1_____________________________`);
reverseString("Hard Work Always Pays Back");
console.log(`________________________ String No. 2_____________________________`);
reverseString("Soon I will be React Champ");

console.log('');


console.log(`------------------------ Using While Loop ----------------------------`);
console.log('');

function reverseStringWhile(strn) {
    

    pos = strn.length-1;
    resStr = "";
    while (pos >= 0) {
        
        const res4 = strn.charAt(pos);

        if (res4 !== ' ') {
         resStr += res4   
        }

        pos--;
    }

    console.log(`The given string is: "${strn}" & It's Reverse String is: "${resStr}"`);
}

console.log(`________________________ String No. 1_____________________________`);
reverseStringWhile("Hard Work Always Pays Back");
console.log(`________________________ String No. 2_____________________________`);
reverseStringWhile("Soon I will be React Champ");