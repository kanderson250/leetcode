/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    //Strategy: recursion
    //Recurse over 'number in the last slot'
    if (nums.length === 1) {
        return [nums]; 
    } else {
        let res = []; 
        for (let i = 0; i < nums.length; i++) {
            let withoutCur = [...nums.slice(0, i), ...nums.slice(i+1)];
            let curToBack = permute(withoutCur).map(perm => {
                perm.push(nums[i]);
                return perm; 
            });
            curToBack.forEach(perm => res.push(perm));
        }
        return res; 
    }    
};