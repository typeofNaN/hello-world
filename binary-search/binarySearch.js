var arr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];

function findIndex(arr, value) {
  var minIndex = 0;
  var maxIndex = arr.length - 1;
  var midIndex = ~~(arr.length / 2)

  //数值判断，避免无效查询
  if (arr[minIndex] > value || arr[maxIndex] < value) {
    return -1;
  }

  while (minIndex <= maxIndex) {
    var midIndex = ~~((minIndex+maxIndex) / 2);

    if (arr[midIndex] == value) {
      return midIndex;
    }

    //如果没有＋1和－1，在查找不存在的数值时会造成死循环
    if (arr[midIndex] > value) {
      maxIndex = midIndex - 1;
    } else {
      minIndex = midIndex + 1;
    }
  }

  return -1;
}

alert(findIndex(arr,250));