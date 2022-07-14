/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k=1) {
    return quickSelect(nums, nums.length - k);    
};


//run quickselect


function quickSelect(nums, target) {
    let lo = 0; 
    let hi = nums.length - 1;
    let p = -1; 
    while (true) {
        p = partition(lo, hi, nums);
        if (p === target) {
            return nums[p];
        } else if (p < target) {
            lo = p + 1; 
        } else {
            hi = p - 1; 
        }
    }
}

//Helper function: partitions nums between lo, hi inclusive about lo.
//returns the final location of the pivot value. 
function partition(lo, hi, nums) {
    let val = nums[lo]; 
    let beginGreater = hi + 1; 
    for (let i = lo + 1; i <= hi; i++) {
        if (nums[i] < val && beginGreater < hi) {
            [nums[i], nums[beginGreater]] = [nums[beginGreater], nums[i]]; 
            beginGreater++; 
        } else if (nums[i] >= val && beginGreater === hi + 1){
            beginGreater = i; 
        }
    }
    [nums[lo], nums[beginGreater - 1]] = [nums[beginGreater - 1], nums[lo]];
    return beginGreater - 1; 
}

//phase one: partition
//choose a pivot (initially the midpoint of lo and hi)
//swap elements into L/R positions about the pivot. update the pivot's location if necessary. 
//phase two: run again
//if the pivot is now in position p, three things are possible: 
   //p = n - k: return! 
   //p > n - k: the kth smallest element is to the left. 
       //set hi to p - 1
   //p < n - k: the kth smallest element is to the right.
       //set lo to p + 1. 