function insertSort(arr) {
  var i, j;
  var len = arr.length;
  var cur;

  for (i = 1; i < len; i++) {
    cur = arr[i];

    for (j = i; j > 0 && arr[j - 1] < cur; j--) {
      arr[j] = arr[j - 1];
    }

    arr[j] = cur;
  }
}

var arr = [6, 5, 7, 1, 3, 4, 1, 7, 5, 2, 8, 6, 9];
insertSort(arr);
console.log(arr);