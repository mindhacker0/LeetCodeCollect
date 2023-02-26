//2353. 设计食物评分系统
class FoodMark{
    constructor(name,val,cuisine){//name是唯一标识
        this.name = name;
        this.val = val;
        this.cuisine = cuisine;
        this.isDelete = false;
    }
}
function swap(arr,x,y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
class MaxHeap{//大根堆
    constructor(){
        this.root = [null];
    }
    offer(node){//插入元素
        this.root.push(node);
        this.heapfyUp();
    }
    poll(){//弹出堆顶
        if(this.root.length<2) return -1;
        swap(this.root,1,this.root.length-1);
        let take = this.root.pop();
        this.heapfyDown();
        return take;
    }
    heapfyUp(){//向上调整
        let end = this.root.length -1;
        while((end>>1)>0){
            let parent = end>>1;
            if(
                (this.root[parent].val<this.root[end].val)||
                (this.root[parent].val===this.root[end].val&&this.root[parent].name>this.root[end].name)
            ) swap(this.root,end,parent);
            else break;
            end = parent;
        }
    }
    heapfyDown(){//向下调整
        let start = 1,len = this.root.length;
        while((start<<1)<len){
            let left = start<<1,right = left+1;
            let next = (right>=len||this.root[left].val>this.root[right].val||(this.root[left].val===this.root[right].val&&this.root[left].name<this.root[right].name))?left:right;
            if(this.root[next].val < this.root[start].val||(this.root[next].val === this.root[start].val && this.root[next].name<this.root[start].name)) swap(this.root,start,next);
            else break;
            start = next;
        }
    }
}
/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.styleMap = new Map;
    this.nodeMap  = new Map;
    for(let i=0;i<foods.length;++i){
        let heap = this.styleMap.get(cuisines[i]);
        if(typeof heap === "undefined") heap = new MaxHeap();
        let node = new FoodMark(foods[i],ratings[i],cuisines[i]);
        heap.offer(node);
        this.nodeMap.set(foods[i],node);
        this.styleMap.set(cuisines[i],heap);
    }
    console.log(this.styleMap);
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    let node = this.nodeMap.get(food);
    node.isDelete = true;
    let nwNode = new FoodMark(food,newRating,node.cuisine);
    this.nodeMap.set(food,nwNode);//更新节点
    //更新堆
    let heap = this.styleMap.get(node.cuisine)
    heap.offer(nwNode);
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    let heap = this.styleMap.get(cuisine);
    let peek = heap.root[1];
    while(peek.isDelete){
        heap.poll();
        peek = heap.root[1];
    }
    return peek;
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */