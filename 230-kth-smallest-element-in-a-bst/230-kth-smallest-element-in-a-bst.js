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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //do a depth first inorder traversal
    //return the kth non-null node. 
    let ordering = [];     
    
    function inOrder(node) {
        if (node) {
            inOrder(node.left);
            ordering.push(node.val);
            inOrder(node.right);
        }
    }
    
    inOrder(root);
    return ordering[k-1];
    
};