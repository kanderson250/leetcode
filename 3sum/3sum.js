/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    //sort nums. 
    nums.sort((a,b) => a-b); 
    const tuples = [];
    let i = 0; 
    while (i < nums.length) {
        let num = nums[i];
        const matches = twoSum(-num, i+1);
        matches.forEach(pair => {
            pair.push(num); 
            tuples.push(pair); 
        })
        i = increment(i); 
    }
    
    return tuples; 
    //helper functions
    
    function decrement(hi) {
        let temp = nums[hi];
        while (temp === nums[hi]) {
                hi--; 
        }
        return hi; 
    }
    
    function increment(lo) {
        let temp = nums[lo]; 
        while (temp === nums[lo]) {
            lo++; 
        }
        return lo; 
    }
    
    function twoSum(target, i) {
        const res = []; 
        let lo = i; 
        let hi = nums.length - 1; 
        while (lo < hi) {
            let sum = nums[lo] + nums[hi];
            if (sum > target) {
                hi = decrement(hi);
            } else if (sum < target) {
                lo = increment(lo);
            } else {
               res.push([nums[hi], nums[lo]]);  
                hi = decrement(hi);
                lo = increment(lo);
            }
        }
        return res; 
        
    }
};