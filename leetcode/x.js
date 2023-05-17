/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr = arr.sort((a, b) => a - b);

  // ALL SEQUENCES -> NOT ANY
  let diff = arr[0] - arr[1];
  for (let i = 2; i < arr.length; i++) {
    let a = arr[i - 1];
    let b = arr[i];
    let diff_ = a - b;

    if (diff !== _diff) return false;
  }

  return true;
};
