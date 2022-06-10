/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
   //This is a DP problem. 
    //Let mat[i][j] be the number of unique paths for an (i+1)x(j+1) board. 
    //Then mat[i][j] = mat[i-1][j] + mat[i][j-1]. 
    //This is the result of either stepping down, or stepping right. 
    const mat = Array(m).fill().map(i => []);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                mat[i][j] = 1; 
            } else {
                mat[i][j] = mat[i-1][j] + mat[i][j-1];
            }
        }      
    }
    return mat[m-1][n-1];
};