/**
 * @param {string} s
 * @return {number}
 */

// Sliding Window Approach

var lengthOfLongestSubstring = function(s) {
    let max = 0; // Create 'max' variable.
    let windowStart = 0; // Create our window start.
    const soFar = {}; // We would like to hash.

    for(let windowEnd = 0; windowEnd < s.length; windowEnd ++) { // We want to iterate over our string 's'.
    // When 'windowEnd' is less than 's.length' increment by 1.
        let rightChar = s[windowEnd]; // updating our 'soFar'.
        soFar[rightChar] = soFar[rightChar] + 1 || 1; // if it's true that there is already something in 'rightChar', add 1.
        // Otherwise, set to 1.
        while(soFar[rightChar] > 1) { // While 'soFar[rightChar]' is greater than 1, we will decrement from the left.
        // Decrement from the repeating element and slide the window over one index.
            let leftChar = s[windowStart];
            if(soFar[leftChar] > 1) { // If 'leftChar' is greater than 1... 
                soFar[leftChar] --; // ...we will decrement it.
            } else {
                delete soFar[leftChar]; // Otherwise, delete it!
            }
            windowStart ++; // increment our 'windowStart' to begin the process again.
        }

        max = Math.max(max,(windowEnd - windowStart) + 1) // Add 1 because the indices will give us one less than the length.

    }

    return max;
};
