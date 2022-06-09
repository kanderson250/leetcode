/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero = -1; 
    let one = -1; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[zero + 1]] = [nums[zero + 1], nums[i]];
            zero++; 
        } 
        if (nums[i] === 1) {
            one = Math.max(zero, one);
            [nums[i], nums[one + 1]] = [nums[one + 1], nums[i]];
            one++;
        }
    }
};