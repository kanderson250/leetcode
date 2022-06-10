/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //sort primarily by start and secondarily by end. 
    const comparator = (intervalA, intervalB) => {
        if (intervalA[0] < intervalB[0]) {
            return -1; 
        }
        if (intervalA[0] > intervalB[0]) {
            return 1; 
        }
        if (intervalA[1] < intervalB[1]) {
            return -1; 
        } else {
            return 1; 
        }
    }
    intervals.sort(comparator);
    //now perform a simple merge
    const res = []; 
    let s = intervals[0][0]; 
    let e = intervals[0][1]; 
    for (let interval of intervals.slice(1)) {
        if (interval[0] > e) {
            res.push([s, e]);
            s = interval[0];
            e = interval[1];
        } else {
            e = Math.max(e, interval[1]);
        }
    }
    res.push([s, e]);
    return res; 
};