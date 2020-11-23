function bubbleSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
}

let arr = [6, 5, 7, 1, 3, 4, 1, 7, 5, 2, 8, 6, 9];
bubbleSort(arr);
console.log(arr);