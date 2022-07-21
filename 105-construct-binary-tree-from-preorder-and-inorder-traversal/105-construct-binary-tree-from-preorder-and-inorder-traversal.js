/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  //use recursion!
    //base case 1: preorder and inorder are empty. 
    if (!preorder.length) {
        return null; 
    }
    
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal); 
    
    //base base 2: preorder and inorder consist of the root node only.
    if (preorder.length === 1) {
        return root; 
    }
    
    //general case    
    //search for the index of root in inorder. 
    const i = inorder.indexOf(rootVal);
    
    //there are (i)# of nodes in the left branch. 
    //there are (inorder.length - i - 1)# of nodes in the right branch. 
    
    //partition preorder into left and right branches. 
    const leftPre = preorder.slice(1, 1+i);
    const rightPre = preorder.slice(1+i);
    
    //partition inorder into left and right branches.
    const leftIn = inorder.slice(0, i);
    const rightIn = inorder.slice(i + 1);
    
    //recurse using the left and right branches of the pre and inorder arrays. 
    const leftHead = buildTree(leftPre, leftIn);
    const rightHead = buildTree(rightPre, rightIn);
    
    root.left = leftHead; 
    root.right = rightHead; 
    return root; 
};