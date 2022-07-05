/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxC = 0; 
    let maxR = 0; 
    for (let c = 0; c < 2*s.length - 1; c++) {
        let i = c % 2; 
        let left = (c-i)/2;
        let right = (c+i)/2;
        while (s[left] && s[right] && s[left] === s[right]) {
            i+=2; 
            left = (c-i)/2; 
            right = (c+i)/2; 
        }
        i-=2; 
        if (i > maxR) {
            maxC = c; 
            maxR = i; 
        }
    }
    let maxLeft = (maxC - maxR)/2; 
    let maxRight = (maxC + maxR)/2; 
    return s.slice(maxLeft, maxRight + 1); 
};