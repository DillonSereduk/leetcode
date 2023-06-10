/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const symbols = { // Map between the symbols and integers
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    
    let total = 0; // Defining total

    for(let i = 0; i < s.length; i++) { // For as long as 'i' is less than 's.length', increment by one
        let current = s[i]; // focus point
        let next = s[i + 1]; // advancing the focus point by one index

        if(symbols[current] < symbols[next]) { // If the current value is less than the next value...
            total -= symbols[current]; // ...subtract the current value from the total
        } else { // If the current value is greater than the next value...
            total += symbols[current]; // ...add the current value to the total
        }
    }

    return total;
};
