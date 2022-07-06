/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    //n is always a binary string of length 32
    //I would call it until the string is empty. 
    let ones = 0; 
    let m = 1;  
    for (let i = 0; i < 32; i++) {
        if ((m & n) !== 0) {
            ones++; 
        }
        m<<=1; 
    }
    return ones; 
};