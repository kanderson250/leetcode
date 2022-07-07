/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adj = {}; 
    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let w = values[i];
        adj[a] ? adj[a].push([b, w]) : adj[a] = [[b, w]];
        adj[b] ? adj[b].push([a, 1/w]) : adj[b] = [[a, 1/w]];
    }
    return queries.map(q => {
       let start = q[0]; 
       let end = q[1];
        //edge case for start or end not in graph
        if (!(adj[start] && adj[end])){
            return -1; 
        }
        //construct a visited object
       const visited = {}; 
       for (let node in adj) {
            visited[node] = false; 
        }
        //visit the start node and begin a DFS. 
        visited[start] = true; 
       function dFS(node, prod) {
            if (node === end) {
                return prod; 
            }
            for (let [u, w] of adj[node]) {
                if (!visited[u]) {
                    visited[u] = true; 
                    flag = dFS(u, prod*w); 
                    if (flag !== -1) return flag; 
                }
            }
            return -1; 
        }
        return dFS(start, 1); 
    }); 
};