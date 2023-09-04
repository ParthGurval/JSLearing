function findSimilarNums(arr) {
    const objSimilarNums = {};

    for (let i = 0; i < arr.length; i++) {
        const currElement = arr[i];
        
        if (objSimilarNums[currElement]) {
            objSimilarNums[currElement].push(currElement);
        } else {
            objSimilarNums[currElement] = [currElement];
        }
    }

    return objSimilarNums; 
}

const inputArrayNums = [1, 5, 7, -1, 6, 5, 7, 6, 4, 1, 3, 5];
const result1 = findSimilarNums(inputArrayNums);

console.log(result1);