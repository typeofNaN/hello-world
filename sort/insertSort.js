function insertSort(arr) {
  const len = arr.length
  let cur

  for (let i = 1; i < len; i++) {
    cur = arr[i]

    for (let j = i; j > 0 && arr[j - 1] < cur; j--) {
      arr[j] = arr[j - 1]
    }

    arr[j] = cur
  }

  return arr
}

const arr = [6, 5, 7, 1, 3, 4, 1, 7, 5, 2, 8, 6, 9]

console.log(insertSort(arr))