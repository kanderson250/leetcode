/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let localMax = 0;
    let max = -Infinity; 
    for (let num of nums) {
        localMax  = Math.max(num, localMax + num); 
        max = Math.max(max, localMax);
    }
    return max; 
};