//2456. 最流行的视频创作者
/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
class User{
    constructor(name){
        this.name = name;
        this.val = 0;
        this.maspice = new MaxHeap;
    }
}
class MasPice{
    constructor(name,val){
        this.name = name;
        this.val = val;
    }
}
function swap(arr,x,y){
    let temp = arr[x];
    arr[x]  = arr[y];
    arr[y] = temp;
}
class MaxHeap{//大根堆
    constructor(){
        this.cache = [null];
    }
    peek(){
        return this.cache.length>1?this.cache[1]:null;
    }
    offer(node){//放入
        this.cache.push(node);
        this.heapfyUp();
    }
    poll(){//取堆顶
        if(this.cache.length === 1) return -1;
        swap(this.cache,1,this.cache.length-1);
        let take = this.cache.pop();
        this.heapfyDown();
        return take;
    }
    heapfyUp(){//上调
        let end = this.cache.length-1;
        while((end>>1)>0){
           let parent = end>>1;
           if(this.cache[parent].val<this.cache[end].val) swap(this.cache,end,parent);
           else if(this.cache[parent].val===this.cache[end].val && this.cache[parent].name>this.cache[end].name) swap(this.cache,end,parent);
           else break;
           end = parent;
        }
    }
    heapfyDown(){//下调
        let start = 1;
        while((start<<1)<this.cache.length){
            let left = start<<1,right = left+1;
            let next = right<this.cache.length?this.cache[right].val<this.cache[left].val?left:right:left;
            if(this.cache[next].val>this.cache[start].val||(this.cache[next].val===this.cache[start].val && this.cache[start].name>this.cache[next].name)){
                swap(this.cache,start,next);
            }else break;
            start = next;
        }
    }
}
var mostPopularCreator = function(creators, ids, views) {
    let createrMap = new Map;
    for(let i=0;i<creators.length;++i){
        let usr = createrMap.get(creators[i]);
        if(typeof usr === "undefined") usr = new User(creators[i]);
        usr.maspice.offer(new MasPice(ids[i],views[i]));
        usr.val+=views[i];
        createrMap.set(creators[i],usr);
    }
    let createrArr = Array.from(createrMap.values());
    createrArr.sort((a,b)=>b.val-a.val);
    let ans = [];
    for(let i=0;i<createrArr.length;++i){
        if(i===0||(createrArr[i].val === createrArr[i-1].val)){
            //console.log(createrArr[i].maspice.cache);
            ans.push([createrArr[i].name,createrArr[i].maspice.peek().name]);
        }else break;
    }
    return ans;
};