/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    //deconstruct problem by breaking into cases each element of nums is or isn't in a set. 
    let prev = [[]]; 
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let temp = []; 
        prev.forEach(set => {
            let withoutCurrent = [...set]; 
            let withCurrent = [...set]; 
            withCurrent.push(current);
            temp.push(withoutCurrent, withCurrent);
        });
        prev = temp; 
    }
    return prev; 
};