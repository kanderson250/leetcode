/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //parse the input prerequisites and create an adjacency table, scheduled, and in progress objects. 
    const adj = Array(numCourses).fill().map(i => []);
    const scheduled = Array(numCourses).fill(false);
    const inProgress = Array(numCourses).fill(false); 
    
    //iterate over prerequisites and modify adj. 
    for (let [i, j] of prerequisites) {
        adj[i].push(j);
    }
    //create a results array.   
    const res = []; 
    
    //iterate over each node in the adjacency table.   
    for(let i = 0; i < adj.length; i++) {
        if (!scheduled[i]) {
            let resolved = dFS(i);
            //early return if a node found a cycle in its dependency chain. 
            if (!resolved) {
                return []; 
            }  
        }

    }   
    return res; 
    
    //dFS returns a BOOLEAN reflecting whether the passed in node can successfully be scheduled given its dependencies. 
    //as a side effect, it adds successfully scheduled nodes to the results array.
    
    function dFS(i) {
        inProgress[i] = true; 
        for (let v of adj[i]) {
            if (!scheduled[v] && inProgress[v]) {
                //early return, cycle detected. 
                return false; 
            }
            if (!scheduled[v] && !inProgress[v]) {
                let resolvedV = dFS(v);
                if (!resolvedV) {
                    return false; 
                }
            }
        }
        //all dependencies have been resolved, so i can be added to the schedule. 
        //add self to results array. 
        res.push(i);
        //mark self as scheduled. 
        scheduled[i] = true; 
        //mark self as no longer in progress. 
        inProgress[i] = false; 
        //return true
        return true; 
    }
        
    
};