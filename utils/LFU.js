//460. LFU 缓存
// 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。
// 实现 LFUCache 类：
// LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
// int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
// void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。
// 当缓存达到其容量capacity时，则应该在插入新项之前，移除最不经常使用的项。
// 在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用 的键
// 当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。
// 对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。
// 函数 get 和 put 必须以 O(1) 
class HeapNode {
    constructor(value, payload) {
        this.value = value || 0;
        this.payload = payload || null;
        this.isDel = false;
    }
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
class MinHeap{
    constructor(){
        this.root = [null];
    }
    insert(key,val){
        let obj = new HeapNode(val,key);
        this.root.push(obj);
        this.heapfyUp(this.root.length -1);
        return obj;
    }
    take(){// 删除堆顶
        let start = 1,end = this.root.length -1;
        if(end<1) return null;
        swap(this.root,start,end);
        let rmObj = this.root.pop();
        this.heapfyDown(start);
        return rmObj;
    }
    heapfyUp(index){// 向上调整
        let start = index,end = 1,parent = null;
        while((parent = start>>1)>=end){
           if(this.root[start].value<this.root[parent].value) swap(this.root,start,parent);
           start = parent;
        }
    }
    heapfyDown(index){// 向下调整
        let start = index,end = this.root.length;
        while(start>end){
            let left = start<<1,right = left+1;
            let next = (right>=end || this.root[left].value < this.root[right].value)?left:right;
            if(this.root[start].value>this.root[next].value) swap(this.root,start,next);
            start = next;
        }
    }
}
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.minCount = new MinHeap;
    this.counter = new Map;
    this.base = new Map;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let val = this.base.get(key);
    if(typeof val!=="undefined"){
        let count = this.counter.get(key)||0;
        this.counter.set(key,count+1);
        this.minCount.update(key,count+1);
    }else val = -1;
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    let res = this.base.get(key);
    if(typeof res === "undefined" && this.base.size >= this.capacity){
        let min = Infinity,minKey = null;
        this.counter.forEach((val,key)=>{
            if(val<min){
                min = val;
                minKey = key;
            }
        });
        if(minKey!==null){
            console.log('del',minKey,this.counter);
            this.base.delete(minKey);
            this.counter.delete(minKey);
        }
    }
    this.counter.set(key,(this.counter.get(key)||0)+1);      
    this.base.set(key,value);
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// let fnArr =["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"];
// let paramArr = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]];
let fnArr = ["LFUCache","put","put","get","get","put","get","get","get"];
let paramArr = [[2],[2,1],[3,2],[3],[2],[4,3],[2],[3],[4]];
let handle = null;
let result = [];
for(let i=0;i<fnArr.length;++i){
    if(fnArr[i] === 'LFUCache') result.push(handle = new LFUCache(...paramArr[i]));
    if(fnArr[i] === 'put') result.push(handle.put(...paramArr[i]));
    if(fnArr[i] === 'get') result.push(handle.get(...paramArr[i]));
}
console.log(result);