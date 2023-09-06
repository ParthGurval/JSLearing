function sumOfDigits(num) {
    // Convert the number to a string to easily access its digits
    const numStr = num.toString();
    
    // Initialize a variable to store the sum of digits
    let sum = 0;
  
    // Loop through each digit and add it to the sum
    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i], 10); // Parse each digit as an integer
      sum += digit;
    }
  
    // Return the sum along with the original number and equation
    return `Addition of number ${num} => ${numStr.split('').join('+')} = ${sum}`;
  }
  
  // Example usage:
  const num = 123;
  const result = sumOfDigits(num);
  console.log(result); // Output: Addition of number 123 => 1+2+3 = 6
  

  //Write a JavaScript function that generates all combinations of a string.
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");


// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Sample Data and output:
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

function findLongestWord(str) {
    // Split the input string into an array of words
    var words = str.split(' ');
  
    // Initialize variables to keep track of the longest word and its length
    var longestWord = '';
    var longestLength = 0;
  
    // Iterate through the array of words
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      // Remove any non-alphanumeric characters from the word (e.g., punctuation)
      var cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
  
      // Check if the current word is longer than the current longest word
      if (cleanWord.length > longestLength) {
        longestWord = cleanWord;
        longestLength = cleanWord.length;
      }
    }
  
    // Return the longest word
    return longestWord;
  }
  
  // Example usage:
  var inputString = 'Web Development Tutorial';
  var longest = findLongestWord(inputString);
  console.log(longest); // Output: 'Development'
  