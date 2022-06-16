/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    //edge case for empty graph. 
    if (!node) {
        return null; 
    }
    const visited = {}; //contains numeric keys whose values are references to COPIED graph nodes. 
    const stack = []; //contains references to the ORIGINAL graph, for a DFS. 
    visited[node.val] = new Node(node.val);
    stack.push(node);
    //perform DFS. 
    while (stack.length) {
        let v = stack.pop();
        for (let u of v.neighbors) { 
            if (!visited[u.val]) {
              stack.push(u);  
              visited[u.val] = new Node(u.val);
            }
            visited[v.val].neighbors.push(visited[u.val]);
        }
    }   
       
    // const queue = []; //a queue representing nodes left to be traversed in the ORIGINAL graph. Only nodes of the ORIGINAL should be added to this. 
    // visited[node.val] = new Node(node.val); 
    // queue.push(node);
    // while (queue.length) {
    //     current = queue.shift();
    //     currentCopy = visited[current.val];
    //     for (let neighbor of current.neighbors) {
    //         if (!(neighbor.val in visited)) {
    //             //make a copy in the visited object
    //             visited[neighbor.val] = new Node(neighbor.val);
    //             //add the node itself to the queue traversing the original graph. 
    //             queue.push(neighbor);
    //         }
    //         currentCopy.neighbors.push(visited[neighbor.val]);
    //     }
    // }
    return visited[node.val];
};