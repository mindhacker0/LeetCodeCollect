//2502. 设计内存分配器
// const lowbit = (x)=>x&-x;
// class BinaryIndexTree{//树状数组
//     constructor(size){
//         this.size = size+1;
//         this.nodeArr = new Array(size+1).fill(0);
//     }
//     update(index,val){//更新某个值
//         for(;index<this.size;index+=lowbit(index)) this.nodeArr[index]+=val;
//     }
//     query(index){//查询某个值
//         let ans = 0;
//         for(;index>0;index-=lowbit(index)) ans+=this.nodeArr[index];
//         return ans;
//     }
// }
/**
 * @param {number} n
 */
var Allocator = function(n) {
    this.memo = new Array(n).fill(-1);
    this.idMap = new Map;
};

/** 
 * @param {number} size 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
    let free = 0,index = -1;
    for(let i=0;i<this.memo.length;++i){
        if(this.memo[i] === -1) free = 0;
        else ++free;
        if(free === size){
            index = i-size+1;
            break;
        }
    }
    let arr = this.idMap.get(mID);
    if(typeof arr === "undefined") arr = [];
    for(let j=0;j<size;j++){
        this.memo[index+j] = mID;
        arr.push(index+j);
    }
    this.idMap.set(mID,arr);
    return index;
};

/** 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function(mID) {
    let arr = this.idMap.get(mID);
    if(typeof arr === "undefined") return;
    arr.forEach(element => {
        this.memo[element] = -1;
    });
    this.idMap.delete(mID);
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */