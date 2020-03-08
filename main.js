const bubbleSort = (array) => {
    console.log(array);
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    console.log(array);
};

const unsortedArray = [10, 6, 8, 9, 0];

bubbleSort(unsortedArray);