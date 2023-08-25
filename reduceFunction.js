
const friends = ["Parth", "Satya", "Ronak", "Vijay", "Devraj"];

const numbers = [1, 2, 3, 4, 5];

function shuffleArray(array) {

    for (let i = array.length-1; i > 0; i--) {
        
        const j = Math.floor(Math.random() * (i + 1)); 
        
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(friends);
console.log();
shuffleArray(numbers);


const pairs = [];

for (let i = 0; i < friends.length; i++) {
    
    pairs.push(`${friends[i]}:  ${numbers[i]}`);
}

const output = pairs.join(', ');

console.log(output);