function quickSort(arr) {
	if (arr.length <= 1) { 
		return orr;
	} else {
        // difining the values  .. 
		let left = [];
		let right = [];
		let newArray = [];
		let pivot = origArray.pop();
        let length = origArray.length;
        // using push and pop to swap the array .. 
		for (var i = 0; i < length; i++) {
			if (arr[i] <= pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
        }
        // calling the function again to compleat the sort. 
        //concat to merge to two arrays. [1,2,3,[4,5,6]]= [1,2,3,4,5,6] 
		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}