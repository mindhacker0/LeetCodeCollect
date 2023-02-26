//2349. 设计数字容器系统
var NumberContainers = function() {
    this.container = new Map;//下标-数字映射
    this.numMap = new Map;//数字-下标映射
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    let hp = this.numMap.get(number);
    if(typeof hp === "undefined") hp = new MinHeap;
    if(hp.del.has(index)) hp.del.delete(index);
    let old = this.container.get(index);
    if(typeof old!=="undefined"&&old!==number){
        let oldHp = this.numMap.get(old);
        oldHp.delete(index);
    }
    if(!hp.nodes.has(index)) hp.offer(index);
    this.numMap.set(number,hp);
    this.container.set(index,number);
    // if(index === 13||number===181) console.log(index,number);
    // if(number === 181) console.log(hp);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    let hp = this.numMap.get(number);
    if(typeof hp === "undefined") return -1;
    //console.log(number,hp);
    return hp.peek();
};
function swap(arr,x,y){
    let temp = arr[x];
    arr[x]  = arr[y];
    arr[y] = temp;
}
class MinHeap{//小根堆
    constructor(){
        this.root = [null];
        this.del = new Set;
        this.nodes = new Set;
    }
    delete(val){
        this.del.add(val);
    }
    peek(){//找到堆顶
        if(this.root.length === 1) return -1;
        let top = this.root[1];
        while(this.del.has(top)){ 
            swap(this.root,1,this.root.length-1);
            this.root.pop();
            this.nodes.delete(top);
            this.del.delete(top);
            this.headpfyDown();
            top = this.root[1];
        }
        return typeof top==="undefined"?-1:top;
    }
    offer(val){//插入
        this.root.push(val);
        this.heapfyUp();
        this.nodes.add(val);
    }
    heapfyUp(){//向上调整
        let end = this.root.length - 1;
        while(end>0){
            let parent = end>>1;
            if(this.root[parent]>this.root[end]) swap(this.root,parent,end);
            end = parent;
        }
    }
    headpfyDown(){//向下调整
        let start = 1,len = this.root.length;
        while((start<<1)<len){
            let left = start<<1,right = left+1;
            let next = right<len?this.root[left]>this.root[right]?right:left:left;
            if(this.root[next]<this.root[start]) swap(this.root,start,next);
            start = next;
        }
    }
    poll(){//取出堆顶
        if(this.root.length === 1) return -1;
        swap(this.root,1,this.root.length-1);
        let take = this.root.pop();
        this.nodes.delete(take);
        this.headpfyDown();
        if(this.del.has(take)){
            this.del.delete(take);
            return this.poll();
        }
        return take;
    }
}
/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */