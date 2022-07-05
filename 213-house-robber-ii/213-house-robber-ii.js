/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let withFirst = nums.slice(0, nums.length - 1);
    let withoutFirst = nums.slice(1);    
    return Math.max(linearRob(withFirst), linearRob(withoutFirst));
};

function linearRob (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let twoBefore = nums[0];
    let oneBefore = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        let current = Math.max(nums[i] + twoBefore, oneBefore);
        [oneBefore, twoBefore] = [current, oneBefore];
    }
    return oneBefore; 
}