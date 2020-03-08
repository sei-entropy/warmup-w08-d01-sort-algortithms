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
