/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //make a reference dict for p
    const pDict = {}; 
    for (let char of p) {
        pDict[char] = pDict[char] ? pDict[char] + 1 : 1; 
    }
    //iterate over s checking for anagrams
    const anagrams = []; 
    const dict = {};
    for (let j = 0; j < s.length; j++) {
        let char = s[j];
        dict[char] = dict[char] ? dict[char] + 1 : 1; 
        if (j >= p.length) {
            dict[s[j-p.length]]--; 
        }
        if (j >= p.length - 1 && evaluateAnagram(dict)){
            anagrams.push(j - p.length + 1);
        }
    }
    //helper function to check for anagrams
    function evaluateAnagram(dict) {
        for (let key in pDict) {
            if (dict[key] !== pDict[key]) {
                return false; 
            }
        }
        return true; 
    }
    return anagrams; 
};