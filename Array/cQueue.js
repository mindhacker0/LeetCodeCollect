var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    let result = null;
    if(!this.stack1.length) return -1;
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    result = this.stack2.pop();
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop());
    }
    return result;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
 var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stack2.length===0){
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop()||-1;
};