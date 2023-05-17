const twoPointersOpositeEnds = (arr) => {
  let left = 0,
    ans = 0,
    right = arr.length - 1;

  while (left < right) {
    // do some logic here with left and right
    if (CONDITION) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

const twoPointersExhaustBoth = (arr1, arr2) => {
  let i = 0,
    j = 0,
    ans = 0;

  while (i < arr1.length && j < arr2.length) {
    // do some logic here
    if (CONDITION) {
      i++;
    } else {
      j++;
    }
  }

  while (i < arr1.length) {
    // do logic
    i++;
  }

  while (j < arr2.length) {
    // do logic
    j++;
  }

  return ans;
};

let slidingWindow = (arr) => {
  let left = 0,
    ans = 0,
    curr = 0;

  for (let right = 0; right < arr.length; right++) {
    // do logic here to add arr[right] to curr

    while (WINDOW_CONDITION_BROKEN) {
      // remove arr[left] from curr
      left++;
    }

    // update ans
  }

  return ans;
};

let preffixSum = (arr) => {
  let prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix.push(prefix[prefix.length - 1] + arr[i]);
  }

  return prefix;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

