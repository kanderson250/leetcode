/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    //strategy
    //move back - to - front
    //stop when we encounter a leading element smaller than a previously encountered element. 
    //
    let i = nums.length - 1; 
    let maxNum = nums[i]; 
    let leadNum = nums[i];
    while(i > 0 && leadNum >= maxNum) {
        i--; 
        leadNum = nums[i];
        maxNum = Math.max(leadNum, maxNum);
    }
    
    //edge case: made it to the front without ever finding a larger preceding element. 
    if (maxNum === leadNum) {
        nums.reverse(); 
        return; 
    }
    
    //find minimal greater preceding element
    let j = findSmallestGreater(nums, leadNum, i + 1); 
    
    //swap leadNum (at index i) and minimal greater num (at index j)
    [nums[i], nums[j]] = [nums[j], nums[i]]; 
    
    //now, sort nums after index i. 
    quickSortFromStart(nums, i + 1);   
    
};

/*
This functions finds the index of the smallest element larger than num after position start, or returns -1 if no such element exists. 
*/

function findSmallestGreater(arr, num, start) {
    let index = -1; 
    let minFound = Infinity; 
    for (let i = start; i < arr.length; i++) {
        if (arr[i] > num && arr[i] < minFound) {
            minFound = arr[i];
            index = i; 
        }
    }
    return index; 
}

/*
This function quicksorts an array starting at start.
*/
function quickSortFromStart(arr, start) {
    partition(arr, start, arr.length - 1); 
}

function partition(arr, lo, hi) {
    if(lo < hi) {
        let p = arr[lo];
        let maxLower = lo; 
        for (let i = lo + 1; i <= hi; i++) {
            if (arr[i] < p) {
                [arr[i], arr[maxLower + 1]] = [arr[maxLower + 1], arr[i]]; 
                maxLower++; 
            }
        }
        [arr[lo], arr[maxLower]] = [arr[maxLower], arr[lo]];  
        partition(arr, lo, maxLower - 1);
        partition(arr, maxLower + 1, hi);
    }
    
}