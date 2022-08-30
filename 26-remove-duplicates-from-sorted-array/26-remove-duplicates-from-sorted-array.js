/**
 * @param {number[]} nums
 * @return {number}
 */

/*
[2,3,3,4,4,5] --> [2,3,4,5] ok, so is [2,3, 4, 5, 4,5]
input - sorted array of integers
output - number of unique elements, plus side effect of modifying the input array in place. 
constraints - sorted, integer values assumed
edge cases - none to say for now

Strategy
two-pointer approach
- first pointer iterates over the array normally tracking the 'current number' and 'previous number'.
- If the current number and the previous number do not match, then pass the current number to the second pointer. 
- second pointer tracks the location of the next slot to be modified in the non-duplicates version. It advances whenever a new number is detected by the first pointer. 

*/
var removeDuplicates = function(nums) {
    let i = 1; //second pointer; this pointer is modifying the first k elements of nums. 
    let prevNumber = nums[0];
    let curNumber;
    for (let j = 1; j < nums.length; j++) {
        curNumber = nums[j];
        if (curNumber !== prevNumber) {
            nums[i] = curNumber; 
            i++; 
        }
        prevNumber = curNumber; 
    }
    return i; 
    
};