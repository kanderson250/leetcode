/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    //one approach: 
    //flip all nums adjacent to zero to 1s. 
    //flip 1+ all nums adjancent to those. 
    //so on. 
    //race conditions.
    //I can think of a naive recursive soln
    
    //new idea: walk through matrix, turning on anything adjacent to 0. 
    //walk through a second time, turning on any nonzero things adjacent to that number. 
    //continue until no 1s remain in the grid. 
    
    let found1 = true;
    let marker = -1; 
    while (found1) {
        found1 = false; 
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                if (mat[i][j] === marker+1) {
                    if (i && mat[i-1][j] === 1) {
                        mat[i-1][j] = marker;
                        found1 = true; 
                    }
                    if (i + 1 < mat.length && mat[i+1][j] === 1) {
                        mat[i+1][j] = marker;
                        found1 = true; 
                    }
                    if (j && mat[i][j-1] === 1) {
                        mat[i][j-1] = marker; 
                        found1 = true; 
                    }
                    if (j + 1 < mat[0].length && mat[i][j+1] === 1) {
                        mat[i][j+1] = marker;
                        found1 = true; 
                    }
                }
            }
        }
        marker--; 
    }
    return mat.map(row => row.map(entry => -entry)); 
};