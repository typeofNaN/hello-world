function debounce(fn, wait) {
  var timeout = null;
  return function() {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}



var throttle = function(func, delay) {
  var prev = Date.now();
  return function() {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  }
}