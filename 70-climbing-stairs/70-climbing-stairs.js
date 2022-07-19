/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //input: integer (number of stairs)
    //output: integer (number of valid combinations)
    //constraints: only 1 or 2 steps at a time; n >= 1. 
    //edge cases: none. 
    
    //notice: ways(n) = ways(n-2) + ways(n-1).
    //thus, this is a one dimensional dynamic programming question
    let a = 0; 
    let b = 1; 
    for (let i = 1; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b; 
};