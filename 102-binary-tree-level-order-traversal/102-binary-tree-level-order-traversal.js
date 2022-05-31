/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //this is just a BFS? 
    //BFS on the tree, appending each level of children to the traversal array as we go.  
    if (!root) {
       return [];
    } 
    let level = [root]; 
    const traversed = []; 
    while (level.length) {
        const nextLevel = [];
        const levelVals = []; 
        for (let node of level) {
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
            levelVals.push(node.val);
        }
        traversed.push(levelVals);
        level = nextLevel; 
    }
    return traversed; 
};