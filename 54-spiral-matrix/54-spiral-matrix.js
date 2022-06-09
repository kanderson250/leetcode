/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let direction = 0; 
    let loRow = 0; 
    let hiRow = matrix.length - 1; 
    let loCol = 0; 
    let hiCol = matrix[0].length - 1; 
    const res = []; 
    while (loRow <= hiRow && loCol <= hiCol) {
        if (direction % 4 === 0) {
            for (let j = loCol; j <= hiCol; j++) {
                res.push(matrix[loRow][j]);
            }
            loRow++; 
        } else if (direction % 4 === 1) {
            for (let i = loRow; i <= hiRow; i++) {
                res.push(matrix[i][hiCol]);
            }
            hiCol--; 
        } else if (direction % 4 === 2) {
            for (let j = hiCol; j>=loCol; j--) {
                res.push(matrix[hiRow][j]);
            }
            hiRow--; 
        } else {
            for (let i = hiRow; i >= loRow; i--) {
                res.push(matrix[i][loCol]);
            }
            loCol++; 
        }
        direction++; 
    }
    return res; 
};