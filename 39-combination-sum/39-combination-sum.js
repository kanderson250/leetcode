/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const m = Array(candidates.length + 1).fill().map(i => []);
    for (let i = 0; i <= candidates.length; i++) {
        const c = candidates[i - 1];
        for (let j = 0; j <= target; j++) {
            if (i === 0) {
                m[i][j] = []; 
            } else if (j === 0) {
                m[i][j] = [''];
            } else {
                let withC = j - c >= 0 ? m[i][j-c].map(str => str + '.' + c) : [];
                let withoutC = [...m[i-1][j]];
                m[i][j] = [...withC, ...withoutC]
            }
        }
    }
    return m[candidates.length][target].map(str => str.slice(1).split('.'));
};