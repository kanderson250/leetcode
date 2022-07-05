/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 0; 
        let hi = n; 
        while ((hi - lo) > 1) {
            let mid = Math.ceil((lo+hi)/2);
            if (isBadVersion(mid)) {
                hi = mid; 
            } else {
                lo = mid; 
            }
        }
        return hi; 
    };
    // [1,2,3,4,5]
    // 0, 5 --- 3 --- tests Good --- set lo = 3. 
    // 3, 5 --- 4 --- tests Bad --- set hi = 4
    // returns 4
};