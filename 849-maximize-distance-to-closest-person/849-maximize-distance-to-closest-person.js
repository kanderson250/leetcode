/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    //algo idea #1: iterate L->R then R->L, then find the maximum
    let l, r; 
    let max = 0; 
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            l = r; 
            r = i; 
            if (l === undefined) {
                max = r; 
            } else {
                max = Math.max(max, Math.floor((r - l)/2));
            }
        }
    }
    //now, r has been updated as far as possible. Whatever the last value of right, combine it into max. 
    max = Math.max(max, seats.length - 1 - r);
    
    
    //ALGO ONE
    // const l = []; 
    // //const r = []; 
    // //calculate left distances
    // for (let i = 0; i < seats.length; i++) {
    //     if (seats[i] === 1) {
    //         l[i] = 0; 
    //     } else if (i === 0) {
    //         l[i] = Infinity
    //     } else {
    //         l[i] = l[i-1] + 1; 
    //     }
    // }
    //OPTIMIZATION ONE
    //now move backwards R to L, both calculating right distance and the maximum. 
    // let r = 0;
    // let max = 0; 
    // for (let i = seats.length - 1; i >= 0; i--) {
    //     if (seats[i] === 1) {
    //         r = 0; 
    //     } else if (i === seats.length - 1) {
    //         r = Infinity; 
    //     } else {
    //         r++; 
    //     }
    //     max = Math.max(max, Math.min(l[i], r));
    // }
    
    // //right distances
    // for (let i = seats.length - 1; i >= 0; i--) {
    //     if (seats[i] === 1) {
    //         r[i] = 0; 
    //     } else if (i === seats.length - 1) {
    //         r[i] = Infinity; 
    //     } else {
    //         r[i] = r[i + 1] + 1; 
    //     }
    // }
    // //find maximum
    // let max = 0; 
    // for (let i = 0; i < l.length; i++) {
    //    max = Math.max(max, Math.min(l[i], r[i])); 
    // }
    
    return max; 
    
};