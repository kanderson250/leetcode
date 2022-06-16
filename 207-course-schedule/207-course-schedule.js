/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

class GraphNode { 
    constructor () {
        this.neighbors = []; 
        this.visiting = false; 
        this.scheduled = false; 
    }
}
var canFinish = function(numCourses, prerequisites) { 
    //STEP ONE: represent the courses as a graph. 
    const adj = Array(numCourses).fill().map(i => new GraphNode());
    for (let tuple of prerequisites) {
       adj[tuple[0]].neighbors.push(adj[tuple[1]]); 
    }
    //STEP TWO: Perform a modified DFS looking for cycles. 
    for (let v of adj) {
        if (!v.scheduled && !scheduleNode(v)) {
            return false; 
        }
    } 
    //returns a boolean based on whether or not the node could be scheduled.
    function scheduleNode(v) {
        //indicate that v is in the descendants chain; 
       v.visiting = true; 
        for (let u of v.neighbors) {
            if (u.visiting) { //u was visited sometime earlier in the descendant chain -- we have a cycle. Pass up this error. 
               return false;  
            }
            if (!u.scheduled && !scheduleNode(u)) { //u hasn't yet been scheduled, so attempt to schedule it- return false if the scheduling fails.    
                return false; 
            }
        }
        //if we've gotten this far, we've successfully scheduled all our descendants. So all that's left to do is to schedule ourself ahead of them!
        //mark ourself as scheduled
        v.scheduled = true; 
        //turn off the flag that we're being processed
        v.visiting = false; 
        //return true
        return true;         
    }
    return true; 
};