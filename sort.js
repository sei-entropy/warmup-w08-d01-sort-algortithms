

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
  var swapp;
  var n = a.length - 1;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (a[i] < a[i + 1]) {
        var temp = a[i];
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

