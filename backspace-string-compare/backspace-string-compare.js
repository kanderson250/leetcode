/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    //my first idea was to use a stack. 
    //second idea: iterate back to front simulatenously
    let i = s.length; 
    let j = t.length; 
    while (i > 0 || j > 0) {
        //t and s Hashes.
        let sHashes = 0; 
        let tHashes = 0;
        //start off a hash count
        while (i >= 0 && sHashes >= 0) {
            i--;
            s[i] === '#' ? sHashes++ : sHashes--; 
        }
        while (j >= 0 && tHashes >= 0) {
            j--; 
            t[j] === '#' ? tHashes++ : tHashes--; 
        }
        //now s and t are paused on their first non-deleted element. 
        if (s[i] !== t[j]) {
            return false; 
        }
    }
    return true; 
};
