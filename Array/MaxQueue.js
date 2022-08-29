//面试题59 - II. 队列的最大值
var MaxQueue = function() {
    this.queue = [];
    this.maxqueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
   return this.maxqueue[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);
  while(this.maxqueue.length===0 || this.maxqueue[this.maxqueue.length-1]<value) this.maxqueue.pop();
  this.maxqueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  let val = this.queue.shift();
  if(val===this.maxqueue[0]) this.maxqueue.shift();
  return val;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
*/
let nameArr = ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
let paramArr =  [[],[2],[1],[],[],[]];
let maxqueue = null;
for(let i=0;i<nameArr.length;i++){
    let name = nameArr[i]
    if(name === "MaxQueue") maxqueue = new MaxQueue();
    else console.log(maxqueue[nameArr[i]](paramArr[i][0]));
}