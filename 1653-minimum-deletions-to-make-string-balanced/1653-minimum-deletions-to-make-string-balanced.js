/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
   //inputs: string consisting of as and bs
    //outputs: integer (minimum num of deletions)
    //none
    //edge cases: none that I can think of?
    //idea number 2: use the sum of as before/bs after to calculate the minimum
    //cost of starting the b block at index i. 
    
    const bsLeft = [];
    //first pass: calculate cost of deleting all bs to the left of the current point. 
    let bCount = 0; 
    for (let i = 0; i < s.length; i++) {
        bsLeft.push(bCount);
        if (s[i] === 'b') {
            bCount++; 
        }
    }
    
    //second pass; calculate the cost of deleting all as to the right of the current position (including position itself if it falls on an a)
    let aCount = 0; 
    let min = s.length;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === 'a') {
            aCount++;
        }
        bsLeft[i] += aCount;
        min = Math.min(min, bsLeft[i]);
    }
    return Math.min(min, bCount);    
  
};