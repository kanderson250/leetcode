/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   //how to count????
    //I would count this by coding up the same solution as for
    //longest palindromic substring, 
    //just taking care to add all 'in between' palindromes to the running total. //let's modify previous code.
    //expand about central characters. 
    let count = 0; 
    //iterate
    for (let c = 0; c < 2* s.length - 1; c++) {
        //if c is even, initiate i as 1. 
        //if c is odd, initiate i as 0. 
        let i = c % 2; 
        let left = (c-i)/2; 
        let right = (c+i)/2; 
        while (s[left] && s[right] && s[left] === s[right]) {
            count++; 
            i+=2; 
            left = (c-i)/2; 
            right = (c+i)/2; 
        }
        
    }
    return count; 
      //run a while loop in each iteration representing expanding palindrome
      //increment count at the end of each while loop 
};