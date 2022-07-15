/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) { 
    let x = 0; //initial x coordinate.
    let y = 0; //initial y coordinate.
    let d = 0; //initial direction (neutral). 
    let visited = {};  
    cleanCellAndNeighbors(x, y, d, visited, robot);
};

function cleanCellAndNeighbors(x, y, d, visited, robot) {
    
    //clean self and record self as visited.
    robot.clean(); 
    visited[buildCoordinate(x,y)] = true; 
    
    //Now, attempt to visit all 4 adjacent cells.  
    for (let i = 0; i < 4; i++) {
  
        //check if the cell immediately ahead was already visited. 
        if(!visitedCellAhead(x,y,d,visited)) {
            //try to move ahead. 
            if (robot.move()) {
                let [xNext,yNext] = positionNextCell(x,y,d); 
                cleanCellAndNeighbors(xNext,yNext,d,visited,robot); 
                backUp(robot);  
            } else {
                //move failed; record that we found a wall. 
                let [xObstacle, yObstacle] = positionNextCell(x,y,d); 
                visited[buildCoordinate(xObstacle,yObstacle)] = true; 
            }
        }
        //move right. 
        robot.turnRight(); 
        d = (d + 1) % 4;       
    } 
}

//HELPER FUNCTIONS

/*
Checks whether the cell immediately ahead has been visited. 
returns: boolean
*/
function visitedCellAhead(x,y,d,visited) {
    [x,y] = positionNextCell(x,y,d);
    let positionAhead = buildCoordinate(x,y); 
    return !!visited[positionAhead]; 
}

/*
Calculates the relative position of the cell immediately ahead. 
returns: a tuple of updated coordinates, [x,y]. 
*/
function positionNextCell(x,y,d) {
    if (d === 0) {
        y++;
    }
    if (d === 1) {
        x++; 
    }
    if (d === 2) {
        y--;
    }
    if (d===3) {
        x--; 
    }
    return [x,y]; 
}

/*
Returns the serialized coordinate 'x,y', used as a key in the visited object.
returns: a string 'x,y'
*/
function buildCoordinate(x,y) {
    return x + ',' + y; 
}

/*
Backs the robot up one cell without changing its direction. 
returns: nothing. 
*/
function backUp(robot) {
    robot.turnRight(); 
    robot.turnRight(); 
    robot.move(); 
    robot.turnRight(); 
    robot.turnRight(); 
}