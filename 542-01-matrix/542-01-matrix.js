/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {    
    //dp in two directions
    
    //top left --> bottom right
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] !== 0) {
                let left = j > 0 ? mat[i][j-1] : Infinity; 
                let up = i > 0 ?  mat[i-1][j] : Infinity;
                mat[i][j] = Math.min(left + 1, up + 1);
            }           
        }
    }
    
    //bottom right ---> top left
    for (let i = mat.length -1; i >= 0; i--) {
        for (let j = mat[0].length -1; j >=0; j--) {
            if (mat[i][j] !== 0) {
                let right = j < mat[0].length - 1 ? mat[i][j+1] : Infinity; 
                let down = i < mat.length - 1 ? mat[i+1][j] : Infinity; 
                mat[i][j] = Math.min(mat[i][j], right + 1, down + 1)
            }
        }
    }
    
    return mat; 
};