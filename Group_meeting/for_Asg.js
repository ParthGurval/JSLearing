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

