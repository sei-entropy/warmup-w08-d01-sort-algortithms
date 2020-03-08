// adding the array 
const arrTest = [5,4,2,9,22,15,66]
const bSort = (inputArr) => {
// itrate by the length of the arrTest 
    for (let i = 0; i < inputArr.length; i++) {
        // iterate over each vlaue in the array 
        for (let j = 0; j < inputArr.length; j++) {
            //  compare the pair values 
            if (inputArr[j] > inputArr[j + 1]) {
                // assign the value of the current iteration to 'tmp' variable 
                let tmp = inputArr[j];
                //swap the positions
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    // returen the value of the input 
    return inputArr;
};