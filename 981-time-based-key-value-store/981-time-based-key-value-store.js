
var TimeMap = function() {
    this.properties = {}; 
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.properties[key]) {
        this.properties[key].push([timestamp, value]);
    } else {
        this.properties[key] = [[timestamp, value]]
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.properties[key]){
        return ""; 
    }
    const prop = this.properties[key];
    //binary search for largest timestamp less than or equal to current timestamp. 
    let lo = 0; 
    let hi = prop.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (prop[mid][0] === timestamp) {
            return prop[mid][1]; 
        }
        if (prop[mid][0] > timestamp) {
            hi = mid - 1; 
        }
        if (prop[mid][0] < timestamp) {
            lo = mid + 1; 
        }
    }
    return hi < 0 ? "" : prop[hi][1];    
    
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */