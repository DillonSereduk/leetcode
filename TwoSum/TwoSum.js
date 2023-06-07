/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** var twoSum = function (nums, target) {
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
*/

var twoSum = function(nums, target) { 
    let map = new Map(); // Creating a Map
    for(let i = 0; i < nums.length; i++) { // iterating through nums and incrementing
        let num1 = nums[i]; // num1 equals first index
        let num2 = target - num1; // num2 equals target minus num1
        if (map.has(num2)) { // Ask Map for num2. If it finds it...
            return[i, map.get(num2)]; // Spit out array with first index and index of num2
        }
        map.set(num1,i); // If we haven't seen it, we will ask the Map to save it.
    }
};

// Better Time and Space complexity! O(n)


