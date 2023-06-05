/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    // For as long as i is less than nums length, increment i by 1
    for (var j = i + 1; j < nums.length; j++) {
      // For as long as j is less than nums.length, increment j by 1
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// thanks rowland
