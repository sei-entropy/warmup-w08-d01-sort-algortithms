const arr = [1,3,5,2,6]

const sort = function(arr) {
    arr.forEach((element, index) => {
        for(let i = 1; i < arr.length; i++){
            if(arr[index]<arr[i]){
                let tmp = arr[index];
                arr[index] = arr[i];
                arr[i] = tmp;
            }
        }
    });
}

// const swap = function(arr, index1, index2) {
//     let tmp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = tmp;
// }