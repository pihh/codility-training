/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Helpers

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}
var nextPermutation = function (nums) {
  let idx1 = -1;
  let idx2 = -1;
  // step 1 fidx breaking point
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      idx1 = i;
      break;
    }
  }
  // if there is no breaking  point
  if (idx1 == -1) {
    reverse(nums, 0);
  } else {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > nums[idx1]) {
        idx2 = i;
        break;
      }
    }

    swap(nums, idx1, idx2);
    reverse(nums, idx1 + 1);
  }
};

/*
[2,1,5,4,3,0,0]
*/
