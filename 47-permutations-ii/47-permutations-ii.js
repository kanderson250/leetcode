/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
Strategy: this is like normal permutations, except the nums are not unique. 
Given [1, 2, 1], sort --> [1, 1, 2] 

permute [1, 2] -- [1, 2]  [2, 1]
now insert the first 1 only if the preceding number is not a 1. 

[1, 2, 1]

[2, 1]

[1, 2]

[1, 2, 1]
[2, 1, 1]
[1, 1, 2]

How to avoid double counting? 

[1, 1*, 2]

[1, 2], [2, 1]

This 1 goes ahead of the other 1. 

[1, 1, 2] - stop

[1, 2, 1]

[2, 1, 1] - stop.

[1, 1, 1, 2] - this 1 goes ahead of the other 2 ones. 

[1, 1, 1, 2] - stop. 

[1, 1, 2, 1] - stop. 

[1, 2, 1, 1]

[2, 1, 1, 1] - stop. 

Strategy: insert at every possible position until we encounter a duplicate. 
Sorting is not necessary. 
*/
var permuteUnique = function(nums, startIndex = 0) {
    if (startIndex === nums.length - 1) {
        return [[nums[startIndex]]]; 
    } else {
        const firstDigit = nums[startIndex]; 
        const permuteSuffix = permuteUnique(nums, startIndex + 1); 
        const res = []; 
        permuteSuffix.forEach(ordering => {
            res.push([firstDigit, ...ordering]); 
            for (let i = 0; i < ordering.length; i++){
                if (ordering[i] === firstDigit) {
                    break; 
                }
                res.push([...ordering.slice(0, i + 1), firstDigit, ...ordering.slice(i + 1)]); 
            }
        })
        return res; 
    }
};