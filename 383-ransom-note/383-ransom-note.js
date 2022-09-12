/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/*
Input: two strings
output: boolean

Strategy: create a dict of the characters in magazine
iterate over ransomNote
if the character is a key for dict, and the associated value is positive, decrement the value and continue
otherwise return false
return true
*/
var canConstruct = function(ransomNote, magazine) {
    //create the dict
    const dict = {};
    for (let char of magazine) {
        if(!dict[char]) {
            dict[char] = 0;
        }
        dict[char]++;
    }
    //iterate over ransomNote
    for (let char of ransomNote) {
        if(!dict[char]){
            return false;
        }
        dict[char]--; 
    }
    return true;
    
};