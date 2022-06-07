/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefixes = [1]; 
    const suffixes = [1]; 
    const answer = []; 
    for (let i = 0; i < nums.length - 1; i++) {
        prefixes[i + 1] = nums[i] * prefixes[i];
        suffixes[i + 1] = nums[nums.length - 1 - i] * suffixes[i];
    }
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefixes[i]*suffixes[nums.length - 1 - i];
    }
    return answer; 
};