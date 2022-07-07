/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
    //build infrastructure
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //stores 'visited' status of the array
    const visited = {}; 
    wordList.forEach(w => visited[w] = false);   
    let l = 1; 
    let level = [beginWord]; 
    while (level.length) {
        let nextLevel = []; 
        for (let w of level) {
            if (w === endWord) {
                return l; 
            }
            findMatches(w, nextLevel);
        }
        l++; 
        level = nextLevel; 
    }
        
    function findMatches(w, q) {
        for (let j = 0; j < w.length; j++) {
            for (let i = 0; i < 26; i++) {
                if (alphabet[i] !== w[j]) {
                    let u = w.slice(0, j) + alphabet[i] + w.slice(j+1);
                    if(visited[u] === false) {
                        visited[u] = true; 
                        q.push(u);
                    }
                }               
            }
        }
    }    
    return 0; 
};