//面试题 03.05. 栈排序
var SortedStack = function() {
    this.stack = [];
    this.assit = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {
    while(this.stack.length && this.stack[this.stack.length-1]<val) this.assit.push(this.stack.pop());
    this.stack.push(val);
    while(this.assit.length) this.stack.push(this.assit.pop());
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {
   this.stack.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
    return this.stack.length?this.stack[this.stack.length-1]:-1;
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {
    return this.stack.length === 0;
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
let obj = new SortedStack();
obj.push(4);
obj.push(1);
obj.push(5);
obj.push(9);
obj.push(2);
console.log(obj);
