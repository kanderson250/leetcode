/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
    let n010 = 0; 
    let n101 = 0; 
    let n10 = 0; 
    let n01 = 0; 
    let n1 = 0; 
    let n0 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            n0++; 
            n10 += n1; 
            n010 += n01; 
        } else {
            n1++; 
            n01 += n0; 
            n101 += n10; 
        }
    }
    return n101 + n010; 
};