/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    //[1, 2, 2, 2, 3, 3] ---
    //[1: 1, 2: 3, 3: 2]
    //[] [1], append 1, 2, or 3 2s; [], [2], [2,2], [2, 2, 2] [1], [1, 2], [1,2,2,2]//
    //append 0, 1, or 2 3s. 
    
    //preprocess nums
    let freq = {}; 
    nums.forEach(i => {
        freq[i] = freq[i] ? freq[i] + 1 : 1; 
    })
    //now iterate over freq
    let res = [[]]; 
    for (let d in freq) {
        let next = []; 
        res.forEach(s => {
            for (let i = 0; i <= freq[d]; i++) { 
                //add s to new
                next.push(s);
                //copy
                let c = [...s];
                //concatenate s with d
                c.push(d);
                //reassign
                s = c; 
            }          
        })
        res = next; 
    }
    return res; 
};