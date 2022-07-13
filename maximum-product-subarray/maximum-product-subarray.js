/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  //this is much like max sum subarray
  //we choose to include each subsequent num or not. 
  //the plot twist is: we might have negative numbers, in which case
    //we need to keep the negatives in play because we might discover a negative later. 
    //idea: track globalMax, maxNegatives and maxPositives. 
    //[2, -3, -2, 4, -1]
    //localMaxPos: 2, 0
    //localMaxPos: 0, -6
    //localMaxPos: 12, -2
    //localMaxpos: 48, -8
    //localMaxPos: 8, -48
    
    //edge case for one negative number; a nonnegative localMax is never realized. 
    if (nums.length === 1 && nums[0] < 0) {
        return nums[0];
    }
    let localMaxPos = 0; 
    let localMinNeg = 0; 
    let globalMax = -Infinity; 
    for (let num of nums) {
       if (num >= 0) {
           [localMaxPos, localMinNeg] = [Math.max(num, num * localMaxPos), num * localMinNeg];
       } else {
           [localMaxPos, localMinNeg] = [num * localMinNeg, Math.min(num, num*localMaxPos)]; 
       }
       globalMax = Math.max(globalMax, localMaxPos, localMinNeg); 
    }
    return globalMax; 
};