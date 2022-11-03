/**
 * @description 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */

function throttle(func, wait, type) {
  if (type === 1) {
    let previous = 0
  } else if (type === 2) {
    let timeout
  }

  return function () {
    let context = this
    let args = arguments

    if (type === 1) {
      let now = Date.now()

      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}

function throttle2(func, delay) {
  let prev = Date.now()

  return function () {
    let context = this
    let args = arguments
    let now = Date.now()

    if (now - prev >= delay) {
      func.apply(context, args)
      prev = Date.now()
    }
  }
}