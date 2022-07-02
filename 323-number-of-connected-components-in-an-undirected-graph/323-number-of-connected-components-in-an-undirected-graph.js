/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    //return connected components
    //this is very much giving number of Islands
    //idea: run a DFS on a node as long as is humanly possible
    //this will realize all of the other nodes in its connected component
    
    //count the number of times the DFS has to be initiated. 
    
    //need a way to mark the numbers as visited.
    //adjacency directory: 
    const adj = Array(n).fill().map(i => []); 
    for (let [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }
    
    //can do this with a visited array. 
    const visited = Array(n).fill(false); 
    
    function dFS(i) {
        visited[i] = true; 
        for (let j of adj[i]) {
            if (!visited[j]) {
                dFS(j);
            }
        }
    }
    
    let components = 0; 
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dFS(i); 
            components++; 
        }
    }
    return components; 
    
};