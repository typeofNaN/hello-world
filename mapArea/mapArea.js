/** 
 * @description 判断某一个坐标点是否在某个不规则多边形里
 * @param { point } 坐标点经纬度
 * @param { areaArr } 区域点坐标经纬度数组
 * @returns { inArea } 是否在区域内
 */
const isInArea = (point, areaArr) => {
  const isAreaPoint = areaArr.find(i => i.longitude === point.longitude && i.latitude === point.latitude)
  if (isAreaPoint) {
    return true
  }

  const len = areaArr.length
  let inArea = false

  for (let i = -1, j = len - 1; ++i < len; j = i) {
    ((areaArr[i].longitude <= point.longitude && point.longitude < areaArr[j].longitude) || (areaArr[j].longitude <= point.longitude && point.longitude < areaArr[i].longitude)) &&
    (point.latitude < (areaArr[j].latitude - areaArr[i].latitude) * (point.longitude - areaArr[i].longitude) / (areaArr[j].longitude - areaArr[i].longitude) + areaArr[i].latitude) &&
    (inArea = !inArea)
  }

  return inArea
}

const areaArr = [{
  longitude: 1,
  latitude: 1
}, {
  longitude: 1,
  latitude: 3
}, {
  longitude: 3,
  latitude: 3
}, {
  longitude: 2,
  latitude: 2
}, {
  longitude: 3,
  latitude: 1
}]

const point = {
  longitude: 1,
  latitude: 3
}

console.log(isInArea(point, areaArr))




