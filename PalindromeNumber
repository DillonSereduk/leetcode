/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false;
    }
    let reversed = 0;
    let current = x;
    while (current !== 0) {
        reversed = reversed*10 + current % 10;
        current = Math.floor(current/10);
    }
    return x === reversed;
};

// Time Complexity: O(n)
// Space Coamplexity: O(1)
