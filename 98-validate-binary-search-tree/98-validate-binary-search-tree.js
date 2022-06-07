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
 * @return {boolean}
 */
var isValidBST = function(root) {
  function BSTUtil(node, lo, hi) {
      if (! (lo < node.val && node.val < hi)) {
          return false; 
      } 
      const checkLeft = node.left ? BSTUtil(node.left, lo, node.val) : true;
      const checkRight = node.right ? BSTUtil(node.right, node.val, hi ) : true; 
      return checkLeft && checkRight; 
  }  
  
  return BSTUtil(root, -Infinity, Infinity);
};