/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length; 
    const n = grid[0].length; 
    let totalIslands = 0; 
    //Strategy: use recursive helper function. 
    //i, j give position of a cell with a 1 in it. 
    function islandsUtil(i, j) {
        //mark self
        grid[i][j] = "2"; 
        //check adjacent cells and run islandsUtil on them if relevant. 
        //up
        i >= 1 && grid[i-1][j] === "1" && islandsUtil(i-1, j);
        //down
        i < m - 1 && grid[i+1][j] === "1" && islandsUtil(i+1, j);
        //left
        j >= 1 && grid[i][j-1] === "1" && islandsUtil(i, j-1);
        //right
        j < n - 1 && grid[i][j+1] === "1" && islandsUtil(i, j+1);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                totalIslands++; 
                islandsUtil(i, j);
            }
        }
    }
    return totalIslands; 
};