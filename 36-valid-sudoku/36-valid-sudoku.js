/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const digits = {};
    for (let i = 1; i <= 9; i++) {
        digits[i] = {
            rows: Array(9).fill(false), 
            cols: Array(9).fill(false),
            subgrids: Array(9).fill(false)
        };
    } 
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
           let d = board[i][j];
            if (d !== "."){
                //calculate subgrid
                let s = subgrid(i, j);
                //check for conflicts
                if (
                   digits[d].rows[i] ||
                   digits[d].cols[j] ||
                   digits[d].subgrids[s]
                ){
                  return false;  
                }
                //update digits
                digits[d].rows[i] = true; 
                digits[d].cols[j] = true; 
                digits[d].subgrids[s] = true; 
            }
        }
    
    }
    
    function subgrid(i, j) {
        let r = Math.floor(i/3);
        let c = Math.floor(j/3);
        return 3*r + c; 
    }
        
    return true; 
};