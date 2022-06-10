/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0] && searchMarker(i, j, word)) {
                return true; 
            }
        }
    }
    
    function searchMarker(i, j, fragment) {
        //case fragment is just one letter
        if (fragment.length === 1) {
            return true; 
        }
        //mark current cell
        board[i][j] = board[i][j] + '-'
        //create a flag
        let flag = false; 
        //shorten the fragment
        let newWord = fragment.slice(1);
        //check up
        if (!flag && board[i-1] && board[i-1][j] === newWord[0]) {
            flag = searchMarker(i-1, j, newWord);
        }
        //check right
        if (!flag && board[i][j+1] && board[i][j+1] === newWord[0]) {
            flag = searchMarker(i, j+1, newWord);
        }
        //check down
        if (!flag && board[i+1] && board[i+1][j] === newWord[0]) {
            flag = searchMarker(i+1, j, newWord);
        }
        //check left
        if (!flag && board[i][j-1] && board[i][j-1] === newWord[0]) {
            flag = searchMarker(i, j-1, newWord);
        }
        //unmark current cell
        board[i][j] = board[i][j][0];
        return flag; 
    }
    
    return false; 
};