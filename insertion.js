function insertionSort() {
    // Array to be sorted
    const arr = [8, 3, 1, 7];

    // Loop over the
    for (let i = 1; i < arr.length; i++) {
        // get element in curretn iteration
        let key = arr[i];
        // get index of previous element
        let j = i - 1;
        // iterate as long as j is valid index (j >= 0), and elemnt at j is greater the current
        while (j >= 0 && arr[j] > key) {
            // insert element at j to the next index because it's the larger number.
            arr[j + 1] = arr[j];
            // bring j back to the previous index
            j = j - 1;
        }
        // The current key is inserted at j + 1
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort());

function bubbleSort() {
    // Array to be sorted
    const arr = [8, 3, 1, 7];

    // get array length
    const len = arr.length;
    // Iterate over array
    for (let i = 0; i < len; i++) {
        // loop over an array and make swaps between adjacent elements based on their value
        for (let j = 0; j < len; j++) {
            // check adjacent items to determine if they need to be swapped or not.
            if (arr[j] > arr[j + 1]) {
                // make a tmp var (to hold the value when making the swap between elemnts)
                let tmp = arr[j];
                // move the smallest element to the index on the left (j) and the larger to right (j+1)
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    // return the sorted array
    return arr;
}

console.log(bubbleSort());
