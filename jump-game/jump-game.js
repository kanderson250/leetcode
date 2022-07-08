/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //create a results array m to store the DP model
    const m = Array(nums.length).fill(false);
    //set position nums.length -1 to be true - the last index can always reach itself!
    m[nums.length - 1] = true; 
    //iterate backwards through m, starting in position nums.length - 2
    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = 1; j <= nums[i]; j++) {
            if (m[i+j]) {
                m[i] = true; 
                break; 
            }
        }
    }
    
    return m[0]; 
};