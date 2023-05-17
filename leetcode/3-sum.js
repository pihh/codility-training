/*
var threeSum = function (nums) {
  const ans = [];
  if (nums.length < 3) return ans;

  let numsMap = {};
  nums = nums.filter((num) => {
    if (!numsMap[num]) numsMap[num] = 0;
    numsMap[num]++;
    let limit = num == 0 ? 3 : 2;
    return numsMap[num] <= limit;
  });
  nums.sort((a, b) => a - b);
  console.log(nums);
  let ansMap = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = num + nums[left] + nums[right];
      let key = `${num}${nums[left]}${nums[right]}`;
      if (!ansMap[key]) {
        ansMap[key] = true;

        if (sum == 0) {
          ans.push([num, nums[left], nums[right]]);

          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      } else {
        left++;
        right--;
      }
    }
  }
  return ans;
};

*/

var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let combinations = [];
  for (let i = 0; i < nums.length - 3; i++) {
    let left = i;
    let right = nums.length - 1;
    let center = i + 1;
    let n = nums[left];
    while (center < right) {

      let sum = nums[left] + nums[center] + nums[right];
      
      if (sum == 0) {
        combinations.push([nums[left], nums[center], nums[right]]);

        n = nums[center];
        while (center < right && nums[center + 1] == n) {
          center++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        center++;
      }
    }

    n = nums[left];

    while (left + 1 < center && nums[left + 1] == n) {
      left++;
    }
    i = left;
  }
  return combinations;
};
