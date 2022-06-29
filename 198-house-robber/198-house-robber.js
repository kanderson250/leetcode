/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //strategy: DP type question. 
    //build out maximum seen up to point i in nums
    //by referencing maximums seens at points i-2 and i-1. 
    if (nums.length < 2) {
        return nums[0];
    }
    let maxTwoBefore = nums[0]; 
    let maxOneBefore = Math.max(nums[0], nums[1]); 
    for (let i = 2; i < nums.length; i++) {
        let maxAtCurrent = Math.max(maxTwoBefore + nums[i], maxOneBefore);
        [maxTwoBefore, maxOneBefore] = [maxOneBefore, maxAtCurrent];
    }
    return maxOneBefore;     
};