module.exports = function reverse(n) {
  if (n < 0) {
    n = Math.abs(n);
  }
  let str = String(n);
  return str.split("").reverse().join("");
}