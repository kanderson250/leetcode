/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    //sort array O(nlogn) time, O(n) space. 
    //use hash to store whether smaller characters can be built. 
    //check status of word exactly one character less. 
    /*{
    w: true
    wo: true
    wor: true ... 
    
    world: 
    ap: false
    }
    
    */
    
    words.sort(); 
    let maxWord = '';
    const canCreate = {}; 
    for (let w of words) {
        if (w.length === 1) {
            canCreate[w] = true; 
            if (w.length > maxWord.length) {
                maxWord = w; 
            }
        } else {
            let shortened = w.slice(0, w.length-1); 
            if (canCreate[shortened]) {
                canCreate[w] = true; 
                if (w.length > maxWord.length) {
                    maxWord = w; 
                }
            } else {
                canCreate[w] = false; 
            }
        }
    }
    return maxWord; 
};