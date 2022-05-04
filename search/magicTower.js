//LCP 30. 魔塔游戏
/**
 * @param {number[]} nums
 * @return {number}
*/
//暴力，每次遇到小于0的可以选择移动或者不移动，穷举算最小值（正确但超时）
//  var magicTower = function(nums) {
//     let sum = 1;
//     for(let i=0;i<nums.length;i++){
//        sum+=nums[i];
//     }
//     if(sum<=0) return -1;
//     let result = 10e7;
//     function trace_back(index,sum,ans){
//         if(sum<=0) return;//去掉中间小于0的分支
//         if(index===nums.length){
//             //console.log(ans);
//             result = Math.min(result,ans);
//             return;
//         }
//         sum+=nums[index];
//         trace_back(index+1,sum,ans);//不移动
//         if(nums[index]<0){
//             sum-=nums[index];
//             trace_back(index+1,sum,ans+1);//移动
//         }
//     }
//     trace_back(0,1,0);
//     return result;
// };
class minHeap{//小根堆
    constructor(){
        this.heap = [null];
    }
    isEmpty(){
        return this.heap.length === 1;
    }
    swap(i,j){
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    insert(elem){//插入元素
        this.heap.push(elem);
        this.heapifyUp(this.heap.length-1);
    }
    heapifyUp(start){//向上调整
        while(start>1 && this.heap[start].val<this.heap[start>>1].val){
            let parent = start>>1;
            this.swap(start,parent);
            start = parent;
        }
    }
    extract(){//提取元素
        let start = 1,end = this.heap.length -1;
        if(start < end) this.swap(start,end);
        let elem = this.heap.pop();
        this.heapifyDown(start);
        return elem;
    }
    heapifyDown(start){//向下调整
        while((start<<1)<this.heap.length){
            let left = start<<1,right = (start<<1)+1;
            let next;
            if(right<this.heap.length){
                next = this.heap[left].val<this.heap[right].val?left:right;
            }else{
                next = left;
            }
            if(this.heap[start].val>this.heap[next].val){
                this.swap(start,next);
                start = next;
            }else{
                break;
            }
        }
    }
}
var magicTower = function(nums) {//贪心，每天选择负数最大的调整到后面，看是否能通过
    let heap = new minHeap();
    let sum = 1;
    for(let i=0;i<nums.length;i++){
       sum+=nums[i];
    }
    if(sum<=0) return -1;
    let ans = 0;
    sum = 1;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(nums[i]<0) heap.insert({val:nums[i],index:i});
        if(sum<=0){
            if(!heap.isEmpty()){
                let {val,index} = heap.extract();
                sum-=val;
                ans++;
            }
        }
    }
    return ans;
};

// console.log(magicTower([100,100,100,-250,-60,-140,-50,-50,100,150]));//1
// console.log(magicTower([-9635,71923,-37495,8366,54303,-86422,-48303,-47858,98424]));//2
// console.log(magicTower([-3,2,10,50,-60,-8,60,-50,100,150]));//2
console.log(magicTower([-1,-1,10]));//2