//面试题 17.09. 第 k 个数
/**
 * @param {number} k
 * @return {number}
*/
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
class minHeap{//最小堆
    constructor(){
        this.heap = [null];
    }
    insert(val){//插入
        this.heap.push(val);
        this.heapifyUp(this.heap.length-1);
    }
    take(){//提取
        if(this.heap.length === 1) return null;
        let start = 1,end = this.heap.length-1;
        if(start<end) swap(this.heap,start,end);
        let elem = this.heap.pop();
        this.heapifyDown(start);
        return elem;
    }
    heapifyUp(index){//向上调整
        let parent = index>>1;
        while(parent>0 && this.heap[parent]>this.heap[index]){
            swap(this.heap,index,parent);
            index = parent;
        }
    }
    heapifyDown(index){//向下调整
        while((index<<1)<this.heap.length){
            let left = index<<1,right = left+1;
            let next;
            if(right<this.heap.length&&this.heap[right]<this.heap[left]) next = right;
            else next = left;
            swap(this.heap,index,next);
            index = next;
        }
    }
}
var getKthMagicNumber = function(k) {//广度优先+最小堆
    let nums = new Set;
    let arr = [3,5,7];
    let stack = new minHeap;
    stack.insert(1);
    let ans = null;
    while(stack.heap.length>1&&nums.size<k){
        let num = stack.take();
        if(nums.has(num)) continue;
        nums.add(num);
        ans = num;
        for(let i=0;i<arr.length;i++){
           stack.insert(num*arr[i]);
        }
    }
    console.log(nums);
    return ans;
};
var getKthMagicNumber = function(k) {//动态规划
    let p1 = 1,p2 =1,p3=1;
    let dp = [];
    dp[1] = 1;
    for(let i=2;i<=k;i++){
        let num1 = dp[p1]*3,num2 = dp[p2]*5,num3 = dp[p3]*7;
        dp[i] = Math.min.call(null,num1,num2,num3);
        if(dp[i]===num1) p1++;
        if(dp[i]===num2) p2++;
        if(dp[i]===num3) p3++;
    }
    return dp[k];
}
console.log(getKthMagicNumber(5));