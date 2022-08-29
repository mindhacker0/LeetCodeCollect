//剑指 Offer 41. 数据流中的中位数
/**
 * initialize your data structure here.
*/
var MedianFinder = function() {
    this.base = [];
    this.size = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.size === 0||num>=this.base[this.size-1]){
        this.base.push(num);
        this.size++;
        return;
    }
    if(num<=this.base[0]){
        this.base.unshift(num);
        this.size++;
        return;
    }
    let start = 0,end = this.base.length-1;
    while(start<end){
        let middle = (start+end)>>1;
        if(num<this.base[middle]){
            end = middle;
        }else if(num>this.base[middle]){
            start = middle+1;
        }else{
            start = middle;
            break;
        }
    }
    //console.log(start);
    this.base.splice(start,0,num);
    this.size++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.size === 0) return null;
    let mid = this.size>>1;
    //console.log(this.base,this.size);
    if(this.size%2){
        return this.base[mid];
    }else{
        return (this.base[mid-1]+this.base[mid])/2;
    }
};
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
*/
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
class minHeap{
    constructor(){
        this.base = [null];
        this.size = 0;
    }
    getTop(){
        return this.base[1];
    }
    insert(num){
        this.base.push(num);
        this.size++;
        this.heapifyUp();
    }
    take(){
        if(this.size === 0) return null;
        let start = 1,end = this.size;
        if(start<end) swap(this.base,start,end);
        let elem = this.base.pop();
        this.size--;
        this.heapifyDown();
        return elem;
    }
    heapifyUp(){
        let index = this.size;
        while(index>1 && this.base[index>>1]>this.base[index]){
            let parent = index>>1;
            swap(this.base,index,parent);
            index = parent;
        }
    }
    heapifyDown(){
        let index = 1;
        while((index<<1)<=this.size){
            let left = index<<1,right = left+1;
            let next = left;
            if(this.base[right]<this.base[left]) next = right;
            if(this.base[index]>this.base[next]){
                swap(this.base,index,next);
                index = next;
            }else{
                break;
            }
        }
    }
}
class maxHeap{
    constructor(){
        this.base = [null];
        this.size = 0;
    }
    getTop(){
        return this.base[1];
    }
    insert(num){
        this.base.push(num);
        this.size++;
        this.heapifyUp();
    }
    take(){
        if(this.size === 0) return null;
        let start = 1,end = this.size;
        if(start<end) swap(this.base,start,end);
        let elem = this.base.pop();
        this.size--;
        this.heapifyDown();
        return elem;
    }
    heapifyUp(){
        let index = this.size;
        while(index>1 && this.base[index>>1]<this.base[index]){
            let parent = index>>1;
            swap(this.base,index,parent);
            index = parent;
        }
    }
    heapifyDown(){
        let index = 1;
        while((index<<1)<=this.size){
            let left = index<<1,right = left+1;
            let next = left;
            if(this.base[right]>this.base[left]) next = right;
            if(this.base[index]<this.base[next]){
                swap(this.base,index,next);
                index = next;
            }else{
                break;
            }
        }
    }
}
// 对顶堆
var MedianFinder = function() {
    this.maxh = new maxHeap();
    this.minh = new minHeap();
    this.size = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.size === 0){
        this.maxh.insert(num);
        this.size++;
        return;
    }
    if(num>this.maxh.getTop()){
        this.minh.insert(num);
    }else{
        this.maxh.insert(num);
    }
    //两个堆的大小差值不能超过1，对弹调整
    if(this.maxh.size-this.minh.size>1) this.minh.insert(this.maxh.take());
    if(this.minh.size-this.maxh.size>1) this.maxh.insert(this.minh.take());
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxh.size === this.minh.size){//两个堆的大小相等，取堆顶的值取平均
        return (this.maxh.getTop()+this.minh.getTop())/2;
    }else{//一大一小，取大的那个堆顶
        return this.maxh.size>this.minh.size?this.maxh.getTop():this.minh.getTop();
    }
};
let nameArr =  ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"];
let paramArr = [[],[-1],[],[-2],[],[-3],[],[-4],[],[-5],[]];
let magic = null;
for(let i=0;i<nameArr.length;i++){
    let name = nameArr[i]
    if(name === "MedianFinder") magic = new MedianFinder();
    else console.log(magic[nameArr[i]](paramArr[i][0]));
} 