function swap(arr,x,y){
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
/**
 * @param {number[]} nums
 * @return {number}
 */

class HeapNode {
    constructor(value,payload){
        this.value = value;
        this.payload = payload;
    }
}
class Heap{
    constructor(len){
        this.root = [null];
    }
    offer(value,payload){
       const node = new HeapNode(value,payload);
       this.root.push(node);
       this.heapifyUp();
    }
    take(){
        const len = this.root.length;
        if(len < 1) return null;
        swap(this.root,1,len-1);
        const node = this.root.pop();
        this.heapifyDown();
        return node;
    }
    top(){
        const len = this.root.length;
        return len <= 1?null:this.root[len-1];
    }
}
class MinHeap extends Heap{
    constructor(){super();}
    heapifyUp(){
        const len = this.root.length;
        let cur = len -1;
        while((cur>>1)>0){
            let parent = cur>>1;
            if(this.root[cur].value<this.root[parent].value) swap(this.root,cur,parent);
            else break;
            cur = parent;
        }
    }
    heapifyDown(){
        let start = 1;
        const len = this.root.length;
        while((start<<1)<len - 1){
            let left = start << 1,right = left + 1;
            const next = (this.root[left].value<this.root[right].value||right>len-1)?left:right;
            if(this.root[start].value>this.root[next].value) swap(this.root,start,next);
            else break;
            start = next;
        }
    }
}
class MaxHeap extends Heap{
    constructor(){super();}
    heapifyUp(){
        const len = this.root.length;
        let cur = len -1;
        while((cur>>1)>0){
            let parent = cur>>1;
            if(this.root[cur].value>this.root[parent].value) swap(this.root,cur,parent);
            else break;
            cur = parent;
        }
    }
    heapifyDown(){
        let start = 1;
        const len = this.root.length;
        while((start<<1)<len - 1){
            let left = start<< 1,right = left + 1;
            const next = (this.root[left].value>this.root[right].value||right>len-1)?left:right;
            if(this.root[start].value<this.root[next].value) swap(this.root,start,next);
            else break;
            start = next;
        }
    }
}
var minimumAverage = function(nums) {
    let max_h = new MaxHeap();
    let min_h = new MinHeap();
    for(let i=0;i<nums.length;++i){
        max_h.offer(nums[i],{value:nums[i],index:i});
        min_h.offer(nums[i],{value:nums[i],index:i});
    }
    let ans = Infinity;
    for(let i=0;i<nums.length>>1;++i){
        let mi = min_h.take();
        let mx = max_h.take();
        // console.log(mi,mx);
        ans = Math.min(ans,(mi.value + mx.value)/2);
    }
    return ans;
};

console.log(minimumAverage([7,8,3,4,15,13,4,1]));