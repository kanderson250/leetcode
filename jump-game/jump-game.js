/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //create a results array m to store the DP model
    //const m = Array(nums.length).fill(false);
    //set position nums.length -1 to be true - the last index can always reach itself!
    nums[nums.length - 1] = true; 
    //iterate backwards through m, starting in position nums.length - 2
    for (let i = nums.length - 2; i >= 0; i--) {
        let jump = nums[i];
        nums[i] = false; 
        for (let j = 1; j <= jump; j++) {
            if (nums[i+j]) {
                nums[i] = true; 
                break; 
            }
        }
    }
    
    return nums[0]; 
};