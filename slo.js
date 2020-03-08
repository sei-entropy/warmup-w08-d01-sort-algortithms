//Bubble sort
//Worst case performance O(n^2)
function bubbleSort(array) {
  let n = array.length;
  while (n > 0) {
    let lastModifiedIndex = 0;
    for (let currentIndex = 1; currentIndex < n; currentIndex++) {
      // if the item at the previous index is greater than the item at the `currentIndex`, swap them
      if (array[currentIndex - 1] > array[currentIndex]) {
        // swap
        let temp = array[currentIndex - 1];
        array[currentIndex - 1] = array[currentIndex];
        array[currentIndex] = temp;
        // save the index that was modified
        lastModifiedIndex = currentIndex;
      }
    }
    // save the last modified index so we know not to iterate past it since all proceeding values are sorted
    n = lastModifiedIndex;
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8];
bubbleSort(array);
alert(array);
////////////////

//insertion
function insertionSort(array) {
  // start at the first index and iterate through to the end
  for (let i = 1; i < array.length; i++) {
    let currentIndex = i;
    /*
     * Check:
     *      1. that currentIndex is at least 1
     *      2. that the item directly before the currentIndex is greater than the item at currentIndex
     *
     * If both conditions are met, swap the indexes
     */
    while (currentIndex > 0 && array[currentIndex - 1] > array[currentIndex]) {
      let temp = array[currentIndex];
      array[currentIndex] = array[currentIndex - 1];
      array[currentIndex - 1] = temp;
      currentIndex--;
    }
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8];
insertionSort(array);
alert(array);

/////////////////////////////////////
//merge
let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8];
mergeSort(array, 0, array.length - 1);
alert(array);

// main function that sorts array[start..end] using merge()
function mergeSort(array, start, end) {
  // base case
  if (start < end) {
    // find the middle point
    let middle = Math.floor((start + end) / 2);

    mergeSort(array, start, middle); // sort first half
    mergeSort(array, middle + 1, end); // sort second half

    // merge the sorted halves
    merge(array, start, middle, end);
  }
}

// merges two subarrays of array[]
function merge(array, start, middle, end) {
  // create temp arrays
  let leftArrayLength = middle - start + 1;
  let rightArrayLength = end - middle;

  let leftArray = [];
  let rightArray = [];

  // fill in left array
  for (let i = 0; i < leftArrayLength; ++i) leftArray[i] = array[start + i];

  // fill in right array
  for (let i = 0; i < rightArrayLength; ++i)
    rightArray[i] = array[middle + 1 + i];

  // merge the temp arrays

  // initial indexes of first and second subarrays
  let leftIndex = 0,
    rightIndex = 0;

  // the index we will start at when adding the subarrays back into the main array
  let currentIndex = start;

  // compare each index of the subarrays adding the lowest value to the currentIndex
  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    if (leftArray[leftIndex] <= rightArray[rightIndex])
      array[currentIndex] = leftArray[leftIndex++];
    else array[currentIndex] = rightArray[rightIndex++];
    currentIndex++;
  }

  // copy remaining elements of leftArray[] if any
  while (leftIndex < leftArrayLength)
    array[currentIndex++] = leftArray[leftIndex++];

  // copy remaining elements of rightArray[] if any
  while (rightIndex < rightArrayLength)
    array[currentIndex++] = rightArray[rightIndex++];
}

////////////////////////////////////////////

//Quick
function quickSort(array, startIndex, endIndex) {
  // verify that the start and end index have not overlapped
  if (startIndex < endIndex) {
    // calculate the pivotIndex
    let pivotIndex = partition(array, startIndex, endIndex);
    // sort the left sub-array
    quickSort(array, startIndex, pivotIndex);
    // sort the right sub-array
    quickSort(array, pivotIndex + 1, endIndex);
  }
}

function partition(array, startIndex, endIndex) {
  let pivotIndex = Math.floor((startIndex + endIndex) / 2);
  let pivotValue = array[pivotIndex];

  while (true) {
    // start at the FIRST index of the sub-array and increment
    // FORWARD until we find a value that is > pivotValue
    while (array[startIndex] < pivotValue) {
      startIndex++;
    }

    // start at the LAST index of the sub-array and increment
    // BACKWARD until we find a value that is < pivotValue
    while (array[endIndex] > pivotValue) {
      endIndex--;
    }

    if (startIndex >= endIndex) return endIndex;

    // swap values at the startIndex and endIndex
    let temp = array[startIndex];
    array[startIndex] = array[endIndex];
    array[endIndex] = temp;
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8];
quickSort(array, 0, array.length - 1);
alert(array);
