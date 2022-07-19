/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let p = quickSelect(nums, nums.length - k);
    return nums[p];
};

const quickSelect = (nums, target) => {
   //call partition until the pivot variable is in position target. 
    let lo = 0; 
    let hi = nums.length - 1; 
    let p = partition(nums, lo, hi);
    while(p !== target) {
       if (p < target) {
           //target is on RHS: shift lo to p + 1. 
           lo = p + 1; 
       } else {
           //target is on LHS: shift hi to p - 1.
           hi = p - 1; 
       }
        p = partition(nums, lo, hi);
    }
    return p; 
}

const partition = (nums, lo, hi) => {
    let p = lo;
    let val = nums[p];
    let lastNumBelow = lo; 
    for (let i = lo + 1; i <= hi; i++) {
        if (nums[i] < val) {
            [nums[i], nums[lastNumBelow + 1]] = [nums[lastNumBelow + 1], nums[i]];
            lastNumBelow = lastNumBelow + 1; 
        }
    }
    //swap pivot and lastNumBelow
    [nums[p], nums[lastNumBelow]] = [nums[lastNumBelow], nums[p]];
    //mutate nums
    //return the index of the pivot variable.
    return lastNumBelow; 
}