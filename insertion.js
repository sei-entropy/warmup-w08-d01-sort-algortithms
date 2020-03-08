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

function mergeSort(arr) {
    //get middle index of array
    const mid = Math.floor(arr.length / 2);
    // get left section from leftmost index of array
    const subLeft = mergeSort(arr.slice(0, mid));
    // get right section from rightmost index of array
    const subRight = mergeSort(arr.slice(mid));

    // call the merge function with the two sub arrays
    return merge(subLeft, subRight);
}

// Function to merge the two sub arrays
function merge(node1, node2) {
    // inititalize empty array that will hold the result of merging both arrays
    const result = [];
    // Iterate over both sub arrays
    while (node1.length > 0 && node2.length > 0)
        // push the element of the smallest first array
        result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
    // concat both arrays
    return result.concat(node1.length ? node1 : node2);
}

console.log(mergeSort([1, 9, 10, 8]));

// Create function
function quickSortBasic(array) {
    if (array.length < 2) {
        return array;
    }
    //declare veriables
    let pivot = array[0];
    let lesserArray = [];
    let greaterArray = [];
    //Create for loop for array
    for (let i = 1; i < array.length; i++) {
        if (array[i] > pivot) {
            greaterArray.push(array[i]);
        } else {
            lesserArray.push(array[i]);
        }
    }
    //retern and marge by using ==> .contact
    return quickSortBasic(lesserArray).concat(
        pivot,
        quickSortBasic(greaterArray)
    );
}
/************************************************************************/
// "the Math.random() function returns a floating-point"
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = [];
//initialize a random integer unsorted array
for (let i = 0; i < 10; i++) {
    arr.push(getRandomInt(1, 100));
}
console.log("Unsorted array: ");
//printing unsorted array
console.log(arr);
arr = quickSortBasic(arr, 0, arr.length - 1);
console.log("Sorted array: ");
console.log(arr);
