const insertionSort = (array) => {
    for(let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] < key) {
            [array[j + 1], array[j]] = [array[j], array[j + 1]];
            j--;
        }
    }
    return array;
};

const unsortedArray = [10, 6, 8, 9, 0];

console.log(insertionSort(unsortedArray));