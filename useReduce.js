


const multArray = [[1,2], [3,4], [5,6]];

const useReduce = multArray.reduce((accumulator, currVal) => {

    return accumulator.concat(currVal);
}, []);

console.log(useReduce);