/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1; 
    while (digits[i] === 9) {
        digits[i] = 0;
        i--; 
    }
    if (i === -1) {
        digits[0] = 1; 
        digits[digits.length] = 0; 
    } else {
        digits[i]++; 
    }
    return digits; 
};