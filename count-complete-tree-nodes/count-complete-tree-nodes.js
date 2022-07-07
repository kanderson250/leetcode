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
var countNodes = function(root) {
    //edge case for empty root
    if (!root) {
        return 0;
    }
    //first, find depth using leftmost path
    let node = root;
    let d = 0; 
    while (node.left) {
        node = node.left; 
        d++; 
    } 
    
    //now execute a binary search using binary encoded addresses of the final level. 
    let lastGood = 0;  
    let firstBad = 2**d;   
    while (lastGood < firstBad - 1) {
        let mid = Math.floor((lastGood + firstBad) /2); 
        let node = binaryAddress(mid, d);
        if (node) {
            lastGood = mid; 
        } else {
            firstBad = mid; 
        }
    }
    return 2**d + lastGood; 
    
    //helper function that reads a binary address and returns the corresponding node. 
    //@param num -- an integer whose binary representation encodes a specific node. 
    //@param d --- the depth of the overall tree. 
    //output --- node (or null, if the node at that address doesn't exist)
    function binaryAddress(num, d) {
        //do a L-> R shifting mask on the num to determine its bits. 
        let m = 2**(d-1);
        let node = root; 
        while (m >= 1) {
            if (m & num) {
                node = node.right; 
            } else {
                node = node.left; 
            }
            m/=2; 
        }
        return node; 
    }
};