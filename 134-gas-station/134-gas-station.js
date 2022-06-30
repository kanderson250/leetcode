/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    //calculate a delta array first (showing the net change station to station). 
    const deltas = []; 
    let totalDelta = 0; 
    for (let i = 0; i < gas.length; i++) {
        deltas.push(gas[i] - cost[i]); 
        totalDelta += (gas[i] - cost[i]); 
    }
    //fail if net change is negative
    if (totalDelta < 0) {
        return -1; 
    }
    //otherwise, look for the first index where a nonnegative run
    //reaches the end of the array. This is enough to guarantee
    //that the index is a valid start. 
    let start = 0;
    let maxRun = 0; 
    for (let j = 0; j < deltas.length; j++) {
        maxRun += deltas[j];
        if (maxRun < 0) {
            start = j + 1;
            maxRun = 0; 
        }
    }
    return start;     
};