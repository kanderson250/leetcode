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
    //slow because its runtime is O(n + k) = O(n). 
    //The runtime should be O(k). 
    
//     let ordering = [];     
    
//     function inOrder(node) {
//         if (node) {
//             inOrder(node.left);
//             ordering.push(node.val);
//             inOrder(node.right);
//         }
//     }
    
//     inOrder(root);
//     return ordering[k-1];
    
    let counter = 0; 
    
    function inOrder(node) {
        if (node) {
            let left = inOrder(node.left);
            if (left !== null) {
                return left; 
            }
            counter++; 
            if (counter === k) {
                return node.val; 
            }
            return inOrder(node.right);
        }
        return null;
    }
    
    return inOrder(root);
    
};