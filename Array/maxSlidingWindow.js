//239. 滑动窗口最大值
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
*/
// var maxSlidingWindow = function(nums, k) {
//     let arr = [0];
//     let result = [];
//     for(let i=0;i<nums.length;i++){
//         while(arr[0]<=i-k) arr.shift();//不在窗口里面
//         if(nums[i]>=nums[arr[0]]){//新进的数大于队头
//             while(arr.length) arr.pop();
//             arr.push(i);
//         }else{
//             while(nums[arr[arr.length-1]]<nums[i]) arr.pop();
//             arr.push(i);
//         }
//         console.log(nums[arr[0]]);
//         if(i>=k-1){
//             result.push(nums[arr[0]]);
//         }
//     }
//     return result;
// };
var maxSlidingWindow = function(nums, k) {//分为k组，前后缀最大值
    let n = nums.length, p = new Int16Array(n), s = new Int16Array(n), r = new Int16Array(n - k + 1), i = n, j = -1
    while (i--) {
        p[++j] = j % k ? Math.max(p[j - 1], nums[j]) : nums[j]
        s[i]   = i % k ? Math.max(s[i + 1], nums[i]) : nums[i]
    }
    console.log(p,s);
    while (i++ < n - k) r[i] = Math.max(s[i], p[i + k - 1])
    return r
}
var maxSlidingWindow = function(nums,k){//优先队列
    const swap = (arr,i,j)=>{
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    class MaxHeap{//大根堆
        constructor(){
            this.root = [null];
        }
        insert(val){
            this.root.push(val);
            this.heapfiyUp(this.root.length-1);
        }
        take(){
            if(this.root.length===1) return null;
            let elem;
            swap(this.root,1,this.root.length-1);
            elem = this.root.pop();
            this.heapfiyDown(1);
            return elem;
        }
        heapfiyDown(index){//向下调整
            while((index<<1)<this.root.length){
                let next;
                let left = index<<1,right = left+1;
                next = right<this.root.length&&nums[this.root[right]]>nums[this.root[left]]?right:left;
                if(nums[this.root[next]]>nums[this.root[index]]){
                    swap(this.root,index,next);
                    index = next;
                }else{
                    break;
                }
            }
        }
        heapfiyUp(index){//向上调整
            while((index>>1)>0&&nums[this.root[index>>1]]<nums[this.root[index]]){
                swap(this.root,index,index>>1);
                index = index>>1;
            }
        }
    }
    let mheap = new MaxHeap;
    let max = [];
    for(let i=0;i<nums.length;i++){
        mheap.insert(i);
        if(i>=k-1){
            let mIndex = mheap.root[1];
            while(mIndex<=i-k){
                mheap.take();
                mIndex = mheap.root[1];
            }
            max.push(nums[mIndex]);
        }
    }
    return max;
}
class segNode{//线段树节点
    constructor(value,left,right){
        this.left = left||null;
        this.right = right||null;
        this.value = value||0;
    }
}
class SegTree{//线段树
    constructor(arr){
        this.data = arr;
        let len = arr.length;
        this.root = new Array(4*len);
        this.build(1,1,len);
    }
    build(index,left,right){//建树
        let node = new segNode(0,left,right);
        this.root[index] = node;
        if(left === right){
            node.value = this.data[left-1];
            return node;
        }
        let mid = (left+right)>>1;
        let lNode = this.build(index<<1,left,mid);
        let rNode = this.build((index<<1)+1,mid+1,right);
        node.value = Math.max(lNode.value,rNode.value);
        return node;
    }
    query(l,r,index=1){//区间查询
        let {left,right,value} = this.root[index];
        if(l <= left && r >= right){//区间已经找到
            return value;
        }
        let max = -Infinity;
        let mid = (left+right)>>1;
        if(l<=mid) max=Math.max(max,this.query(l,r,index<<1));
        if(r>=mid+1) max=Math.max(max,this.query(l,r,(index<<1)+1));
        return max;
    }
}
var maxSlidingWindow = function(nums,k){//线段树
    let sgtree = new SegTree(nums);
    let ans = [];
    for(let i=0;i<=nums.length-k;i++){
        ans.push(sgtree.query(i+1,i+k));
    }
    return ans;
}
var maxSlidingWindow = function(nums,k){//分块，通过保存块的最大值来加快计算速度
    let len = nums.length;
    let block = Math.ceil(Math.sqrt(k));//每块的大小
    let region = new Array(Math.ceil(len/block)).fill(-1);//region用来保存每块的最大值
    for(let i=0;i<len;i++){//算出每块的最大值
        region[getIndex(i)] = Math.max(region[getIndex(i)],nums[i]);
    }
    console.log(block,region);
    function getIndex(k){return Math.floor(k/block)};
    function query(i,j){//查询某个区间
        let ans = -Infinity;
        if(getIndex(i)===getIndex(j)){//在同一块内
            for(let s=i;s<=j;s++) ans = Math.max(ans,nums[s]);
        }else{//跨越不同的块
            //夹逼到块的边缘
            let l = i,r = j;
            while(getIndex(l)===getIndex(i)){ans = Math.max(ans,nums[l]);l++;}
            while(getIndex(r)===getIndex(j)){ans = Math.max(ans,nums[r]);r--;}
            for(let k=getIndex(l);k<=getIndex(r);k++) ans = Math.max(ans,region[k]);
        }
        return ans;
    }
    let ans = [];
    for(let i=0;i<=len-k;i++){
        console.log(i,i+k-1);
        ans.push(query(i,i+k-1));
    }
    return ans;
}
// let nums = [1,3,-1,-3,5,3,6,7];
// let k = 3;
let nums = [1,2,3,4,5]
let k = 1;
console.log(maxSlidingWindow(nums,k));
