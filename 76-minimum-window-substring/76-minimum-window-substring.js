/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //frequency table for t
    const tFreq = {}; 
    for (let c of t) {
       if (!tFreq[c]) {
           tFreq[c] = 0; 
       }
        tFreq[c]++; 
    }
    const sFreq = {};
    let l = -1; 
    let r = -1;
    let minSize = Infinity; //default in case no minimum is found. 
    let minIndices = [s.length, s.length]; //defaults to a indices outside the string. 
    while (l < s.length-1 && r < s.length-1) {
        //move right
        while (r < s.length - 1 && !containsT(sFreq) ) {
            r++;
            if (!sFreq[s[r]]) {
                sFreq[s[r]] = 0; 
            }
            sFreq[s[r]]++; 
        } 
        //move left
        while (containsT(sFreq)) {
            //update mins
            if (r - l + 1 < minSize) {
                minSize = r - l + 1; 
                minIndices = [l, r];                
            } 
            sFreq[s[l]]--;
            l++;             
        }
    }
    
    return s.slice(minIndices[0], minIndices[1] + 1); 
    
    function containsT(sFreq) {
        //check whether every character of t appears. 
        for (let c in tFreq) {
            if (!(sFreq[c] >= tFreq[c])) {
                return false; 
            }
        }
        return true;       
    }
    
};