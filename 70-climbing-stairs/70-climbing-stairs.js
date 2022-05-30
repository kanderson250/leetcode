/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1; 
    let b = 2;
    for (let i = 1; i < n; i++) {
        [b, a] = [a+b, b];
    }
    return a;    
};