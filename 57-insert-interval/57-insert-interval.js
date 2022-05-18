/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = []; 
    let lo = newInterval[0]; 
    let hi = newInterval[1];
    let inserted = false; 
    for (let int of intervals) {
        if (int[1] < newInterval[0]){
            result.push(int);
        } else if (int[0] > newInterval[1]) {
            if (!inserted) {                
                result.push([lo, hi]);
                inserted = true; 
            }
            result.push(int);
        } else {
            lo = Math.min(int[0], lo);
            hi = Math.max(int[1], hi);          
        }
    }
    if (!inserted) {
        result.push([lo, hi]);
    }
    return result;     
};