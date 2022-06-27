/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //explanation: 
    //two pointers, one at either end. 
    //advance the lesser of two pointers inwards. 
    //track the max area encountered so far at each advancement. 
    let i = 0; 
    let j = height.length - 1; 
    let max = 0; 
    while (i < j) {
        let top = Math.min(height[i], height[j]);
        max = Math.max(max, top * (j - i)); 
        if (height[i] <= height[j]) {
            i++; 
        } else {
            j--; 
        }
    }
    return max; 
};