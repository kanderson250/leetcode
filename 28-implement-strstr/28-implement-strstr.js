/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) {
        return 0; 
    }
    //naive solution
    //iterate over haystack, iterate over needle
    //return index in haystack when needle is first found. 
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let found = true; 
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                found = false; 
                break; 
            }
        }
        if (found) return i; 
    }
    return -1; 
};