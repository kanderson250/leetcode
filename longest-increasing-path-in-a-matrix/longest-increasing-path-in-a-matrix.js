/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let m = matrix.length; 
    let n = matrix[0].length; 
    const p = Array(m).fill().map(i => Array(n).fill(0));
    let globalMax = 0; 
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) { 
            globalMax = Math.max(globalMax, findPath(i, j)); 
        }
    }
    return globalMax; 
    
    //findPath helper function : updates the path matrix and returns the longest path. 
    function findPath(i, j) {
        if (p[i][j]) {
            return p[i][j]; 
        }
        let num = matrix[i][j];
        let max = 0; 
        //scan neighbors of m[i][j] for strictly larger values
        if (i > 0 && matrix[i-1][j] > num) {
            max = Math.max(max, findPath(i-1, j)); 
        } 
        if (i < m - 1 && matrix[i+1][j] > num) {
            max = Math.max(max, findPath(i+1, j)); 
        }
        if (j > 0 && matrix[i][j-1] > num) {
            max = Math.max(max, findPath(i, j-1));
        }
        if (j < n - 1 && matrix[i][j+1] > num) {
            max = Math.max(max, findPath(i, j+1)); 
        }
        p[i][j] = 1 + max; 
        return 1 + max; 
    }
};