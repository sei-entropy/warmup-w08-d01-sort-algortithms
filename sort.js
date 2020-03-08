

//Insertion sort
const insertion = (a) => {
  for (let i = 1; i < a.length; i++) {
    let j = i - 1;
    let temp = a[i];
    while (j >= 0 && a[j] > temp) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = temp;
  }
  return a;
};
console.log(insertion([3,0,2,5]))

//bubble
function bubble(a) {
  let swapp;
  let n = a.length - 1;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (a[i] < a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return a;
}
console.log(bubble([12, 7, 3, 9, 15]));
//Merge Sort 
function mergesort(left, right) {
  //defien
  let A = 0;
  let B = 0;
  let results = [];
  while (A < left.length || B < right.length) {
    if (A === left.length) {
      results.push(right[B]);
      B++;
    } else if (B === right.length || left[A] <= right[B]) {
      results.push(left[A]);
      A++;
    } else {
      results.push(right[B]);
      B++;
    }
  }
  return results;
}
//Quicksort
let items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
let sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]

