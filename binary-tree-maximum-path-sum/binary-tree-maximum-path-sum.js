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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity; 
    var findMaxThroughRoot = function(node) {
        if (node) {
            let maxLeft = findMaxThroughRoot(node.left);
            let maxRight = findMaxThroughRoot(node.right);
            let maxEndRoot = Math.max(node.val, node.val + maxLeft, node.val + maxRight);
            let maxThroughRoot = Math.max(maxEndRoot, node.val + maxLeft + maxRight); 
            max = Math.max(maxThroughRoot, max);
            return maxEndRoot; 
        }
        return 0; 
    }
    findMaxThroughRoot(root);
    return max; 
};