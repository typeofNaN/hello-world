function bubbleSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }

  return arr
}

const arr = [6, 5, 7, 1, 3, 4, 1, 7, 5, 2, 8, 6, 9];

console.log(bubbleSort(arr))