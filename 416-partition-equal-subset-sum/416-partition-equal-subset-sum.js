/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    //Strategy: get the sum total, divide it by 2, see if any combo of nums reaches that target. 
    //this is a dynamic programming problem. 
    //m[i][j] = 'can make amount j using the numbers in nums.slice(0,i) at most once'.
    let target = nums.reduce((i, memo) => i + memo); 
    if (target % 2 !== 0) {
        return false; 
    }
    target /= 2; 
    const m = Array(nums.length+1).fill().map(i => []);
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            if (j === 0) {
                m[i][j] = true; 
            } else if (i === 0) {
                m[i][j] = false; 
            } else {
                let num = nums[i-1];
                m[i][j] = m[i-1][j] || !!m[i-1][j-num];
            }
        }
    }
    return m[nums.length][target];
};