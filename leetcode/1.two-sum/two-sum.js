/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 穷举法，暴力for嵌套循环，时间复杂度 O(n2)
 */
var twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const dif = target - nums[i]
    // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === dif) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))  // [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 利用数组减少查询时间，时间复杂度 O(n)
 */
var twoSum1 = (nums, target) => {
  const temp = []
  for(let i = 0; i < nums.length; i++) {
    const dif = target - nums[i]
    if (temp[dif] !== undefined) {
      return [temp[dif], i]
    }
    temp[nums[i]] = i
  }
}

console.log(twoSum1([2, 7, 11, 15], 9))  // [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 使用hash table方法，时间复杂度 O(n)
 */
var twoSum2 = (nums, target) => {
  // 构造哈希表
  const map = new Map()  // 存储方式 {need, index}

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set(target - nums[i], i)
    }
  }
}

console.log(twoSum2([2, 7, 11, 15], 9))  // [0, 1]
