/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let count = 0;
  let map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);


  for (let i = 1; i < s.length; i++) {
    let s0 = map.get(s[i - 1]);
    let s1 = map.get(s[i]);
    let sign = s0 >= s1 ? 1 : -1;
    count += sign * s0;
  }

  return count + map.get(s[s.length - 1]);
};
