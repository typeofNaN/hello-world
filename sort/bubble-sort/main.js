function bubbleSort(arr) {
  var len = arr.length
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      var temp
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}


var arr = [6, 5, 7, 1, 3, 4, 1, 7, 5, 2, 8, 6, 9]
bubbleSort(arr)
console.log(arr)