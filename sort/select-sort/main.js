function selectSort(arr) {
  var len = arr.length
  for (var i = 0; i < len; i++) {
    var min = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (i != min) {
      var temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

var arr = [6, 5, 7, 1, 3, 4, 1, 7, 5, 2, 8, 6, 9]
selectSort(arr)
console.log(arr)