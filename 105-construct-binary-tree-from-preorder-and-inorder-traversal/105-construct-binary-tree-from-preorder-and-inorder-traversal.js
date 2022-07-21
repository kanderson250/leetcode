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
    
    //time optimizer: build a hash of inorder indices. 
    const memoizedIndices = {}; 
    inorder.forEach((v, i) => memoizedIndices[v] = i); 
    
    //recursive helper
    function buildTreeUtil(pLo, iLo, num) {
          //use recursion!
        //base case 1: relevant segment of preorder and inorder are empty. 
        if (num <= 0) {
            return null; 
        }

        const rootVal = preorder[pLo];
        const root = new TreeNode(rootVal); 

        //base base 2: preorder and inorder consist of the root node only.
        if (num === 1) {
            return root; 
        }

        //general case    
        //search for the index of root in inorder. 
        const i = memoizedIndices[rootVal];

        //find num, pLo, iLo for the left branch
        const leftNum = i - iLo; 
        const pLoLeft = pLo + 1; 
        const iLoLeft = iLo; 
        
        //find num, pLo, iLo for the right branch
        const rightNum = num - leftNum - 1; 
        const pLoRight = pLoLeft + leftNum; 
        const iLoRight = i + 1; 

        //recurse using the left and right branches of the pre and inorder arrays. 
        const leftHead = buildTreeUtil(pLoLeft, iLoLeft, leftNum);
        const rightHead = buildTreeUtil(pLoRight, iLoRight, rightNum);

        root.left = leftHead; 
        root.right = rightHead; 
        return root; 
    }
    
    return buildTreeUtil(0, 0, preorder.length);
};
