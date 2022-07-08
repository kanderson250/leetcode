/**
 * @param {string} s
 * @return {number}
 */

//constraints: s has length at least 1. 
//edge case: no substring contains exactly 2 characters, ie 'aaaa'; ---> returns s itself. 

var lengthOfLongestSubstringTwoDistinct = function(s) {
    //num1 tuple : [val, last occurence];
    let num1 = [s[0], 0]; 
    //num2 tuple: [val, last occurence];
    let num2; 
    //head : starting index of the current window. 
    let head = 0; 
    //max: the length of the longest window yet discovered. 
    let max = -Infinity; 
    //iterator k
    for (let i = 0; i < s.length; i++) {
        if(num1[0] === s[i]) {
            num1[1] = i; 
        } else if (num2 === undefined || num2[0] === s[i]) {
            num2 = [s[i], i]; 
        } else {
            max = Math.max(max, i - head);
            if (num1[1] < num2[1]) {
                head = num1[1] + 1; 
                num1 = [s[i], i];
            } else {
                head = num2[1] + 1; 
                num2 = [s[i], i];
            }
        }
    }
    //one last update --- this is not checked in the for loop, because it is never 'usurped' by another character. 
    max = Math.max(max, s.length - head);
    return max; 
};