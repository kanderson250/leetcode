/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //strategy
    //start at the beginning of the string, count out as far as possible without repeating characters. 
    //once we encounter a repeat, 
    //'abcdebdfghi'
    //idea: track characters and their indices, AND the 'start' index of the current streak. 
    //use 'start' index in checking for duplicates step. We only have a duplicate
    //if the previous index associated to the character was after the start value. 
    
    const mostRecent = {}; 
    let start = 0; 
    let maxStreak = 0; 
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (mostRecent[c] >= start) {
            maxStreak = Math.max(maxStreak, i - start)
            start = mostRecent[c] + 1;
        }
        mostRecent[c] = i; 
    }
    return Math.max(maxStreak, s.length - start); 
};