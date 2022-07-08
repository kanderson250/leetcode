/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const res = []; 
    //edge case: nums is empty
    if (!nums.length) {
        res.push(makeRange(lower, upper));
        return res; 
    }
    
    //handle lower
    if (nums[0] - lower > 0) {
        res.push(makeRange(lower, nums[0] - 1));
    } 
    //handle nums
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i-1] - 1 > 0) {
            res.push(makeRange(nums[i-1] + 1, nums[i] - 1));
        }
    }
    //handle upper
    if (upper - nums[nums.length - 1] > 0) {
        res.push(makeRange(nums[nums.length - 1] + 1, upper));
    }
    
    function makeRange(a, b) {
        if (a === b) {
            return '' + a; 
        }
        return a + '->' + b;
    }
    
    return res; 
};