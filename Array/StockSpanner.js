// var StockSpanner = function() {
//     this.recod = [];
// };

/** 
 * @param {number} price
 * @return {number}
 */
// StockSpanner.prototype.next = function(price) {//淘汰下标靠前，且大的
//     this.recod.push(price);
//     let len = 0;
//     for(let i=this.recod.length-1;i>=0;i--){
//         if(this.recod[i]<=price) len++;
//         else break;
//     }
//     return len;
// };
var StockSpanner = function() {
    this.idx = -1;
    this.stack = [[-1,Number.MAX_SAFE_INTEGER]];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {//淘汰下标靠前，且大的
    this.idx++;
    while(this.stack.length&&this.stack[this.stack.length-1][1]<=price) this.stack.pop();
    let ans = this.idx - this.stack[this.stack.length-1][0];
    this.stack.push([this.idx,price]);
    return ans;
};
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
 let nameArr = ["StockSpanner","next","next","next","next","next","next","next",'next'];
 let paramArr =  [[],[100],[80],[60],[70],[60],[75],[65],[100]];
 let numArray = null;
 for(let i=0;i<nameArr.length;i++){
     let name = nameArr[i]
     if(name === "StockSpanner") numArray = new StockSpanner(...paramArr[i]);
     else console.log(numArray[nameArr[i]](...paramArr[i]));
 }