

// ArrayNum = [1, 5, 6, 8, -1, 6, 5, 1, 8, 4];

function findSimilarNums(arr){

    const objSimilarNums = {};

    for (let i = 0; i < arr.length; i++) {
        const currElement = arr[i];
        
        if(objSimilarNums[currElement]){

            objSimilarNums[currElement].push(currElement);
        }
        else {

            objSimilarNums[currElement] = [currElement];
        }
    }

    const addNumArray = [];

    for (const key in objSimilarNums) {

        const similarEle = objSimilarNums[key];
        const sum = similarEle.reduce((acc, val) => acc + val, 0);
        
        addNumArray.push({
            description: `Addition of the similar numbers from the array ${similarEle.join('+')}=${sum}`,
            commonNumbers: similarEle
        });
    }

    return addNumArray;

}

const inputArrayNums = [1, 5, 7, -1, 6, 5, 7, 6, 4, 1, 3, 5];
const similarSumArray = findSimilarNums(inputArrayNums);

similarSumArray.forEach((item) => {

    console.log(item.description);
    console.log(`Similar Elements are:`, item.commonNumbers);
});
