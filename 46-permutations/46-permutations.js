/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    //Strategy: recursion
    //Recurse over the position of the last number in nums. 
    if (nums.length === 1) {
        return [nums]; 
    } else {
        const res = []; 
        let last = nums.pop(); 
        const withoutLast = permute(nums);
        withoutLast.forEach(perm => {
            for (let i = 0; i <= perm.length; i++) {
                const permCopy = [...perm];
                permCopy.splice(i, 0, last);
                res.push(permCopy);
            }
        });
        return res; 
    }    
};