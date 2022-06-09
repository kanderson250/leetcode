
var MinStack = function() {
    this.items = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const min = this.items.length === 0 ? val : Math.min(this.getMin(), val);
    this.items.push([val, min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.items.pop(); 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.items[this.items.length -1][1]; 
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */