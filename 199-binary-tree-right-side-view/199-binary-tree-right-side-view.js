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
 * @return {number[]}
 */
var rightSideView = function(root) {
    //handle root being null
    if (!root) {
        return []; 
    }
    //create an inView array
    const inView = []; 
    //initiate current level as root
    let currentLevel = [root];
    //while current level is nonempty
    while (currentLevel.length !== 0) {
       //add last element of currentLevel to inView
        inView.push(currentLevel[currentLevel.length - 1].val); 
       //make a nextLevel array. 
        let nextLevel = []; 
       //iterate over current level
        for (let i = 0; i < currentLevel.length; i++) {
            let node = currentLevel[i]; 
            node.left && nextLevel.push(node.left); 
            node.right && nextLevel.push(node.right);
        }
        currentLevel = nextLevel; 
    }

    return inView;  
};