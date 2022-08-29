//剑指 Offer 30. 包含min函数的栈
/**
 * initialize your data structure here.
*/
var MinStack = function() {
    this.stack = [];
    this.minVal = 10e9;
    this.minStack = [];
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(x<this.minVal){
        this.minVal = x;
    }
    this.stack.push(x);
    this.minStack.push(this.minVal);
    this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.size === 0) return;
    this.size--;
    this.minStack.pop();
    this.minVal = this.size>0?this.minStack[this.size-1]:10e9;
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */