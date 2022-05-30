/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */ 
var canConstruct = function(ransomNote, magazine) {
    //STRATEGY
    //make a dict of magazine
    //iterate through ransom note
    //if letter of ransom note is in dict, decrease dict count and continue
    //else return false
    
    const dict = {}; 
    for (let char of magazine) {
        dict[char] ? dict[char]++ : dict[char] = 1; 
    }
    for (let char of ransomNote) {
        if (!dict[char]) {
            return false; 
        }
        dict[char]--; 
    }
    return true; 
};