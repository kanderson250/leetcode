/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  //strategy
 //count up frequencies
 //create an array of frequencies, each containing a list of chars
    //count backwards through the freq array k times. 
    //O(n).
    const count = {}; 
    for (let num of nums) {
        count[num] = count[num] ? count[num] + 1 : 1; 
    }
    const freq = Array(nums.length + 1).fill().map(i => []); 
    for (let c in count) {
        freq[count[c]].push(c);
    }
    const res = []; 
    for (let i = freq.length -1; i >= 0; i--) {
        for (let c of freq[i]) {
            res.push(c);
            if (res.length === k) {
                return res; 
            }
        }
    }
};