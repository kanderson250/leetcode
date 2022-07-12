/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = []; 
    let start; 
    let end; 
    let i = 0; 
    const newLo = newInterval[0]; 
    const newHi = newInterval[1]; 
    while (start === undefined && i < intervals.length) {
        let lo = intervals[i][0]; 
        let hi = intervals[i][1];
        if (newLo < lo) {
            start = newLo; 
        } else if (newLo <= hi) {
            start = lo; 
        } else {
            res.push([lo, hi]); 
            i++; 
        }
    }
    
    //edge case: the whole array was traversed without finding start.    
    if (start === undefined) {
        res.push([newLo, newHi]);
        return res; 
    }
    
    while (end === undefined && i < intervals.length) {
        let lo = intervals[i][0]; 
        let hi = intervals[i][1]; 
        if (newHi < lo) {
            end = newHi; 
            res.push([start, end]); 
            res.push([lo, hi]); 
        } else if (newHi <= hi) {
            end = hi;
            res.push([start, end]); 
        }
        i++; 
    } 
    if (end === undefined) {
        res.push([start, newHi]); 
        return res; 
    }
    res.push(...intervals.slice(i)); 
    return res;     
};


//TEST CASES

// [[1,3], [4, 5], [6,9], [11, 12]]
// [5,7]
