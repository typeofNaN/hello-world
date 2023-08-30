function selectSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    let min = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (i != min) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr
}

const arr = [6, 5, 7, 1, 3, 4, 1, 7, 5, 2, 8, 6, 9]

console.log(selectSort(arr))