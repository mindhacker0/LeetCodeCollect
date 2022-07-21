//307. 区域和检索 - 数组可修改
/**
 * @param {number[]} nums
*/
// var NumArray = function(nums) {//树状数组，对于频繁修改更新前缀和的事件复杂度是logn（82.02%）
//     this.length = nums.length;
//     this.dic = new Array(nums.length+1);//存储树状数组
//     this.data = nums;
//     let preSum = [0];//计算前缀数组，用来初始化树状数组
//     for(let i=1;i<=this.length;i++){
//         preSum[i] = preSum[i-1]+nums[i-1];
//     }
//     for(let i=1;i<=this.length;i++){//第n个树状数组的值为n的前lowbit个数。比如12的lowbit通过12&-12计算得到4，那么12就是nums[9]+nums[10]+nums[11]+nums[12],可以通过前缀数组presum[12] - presum[8]快速得到
//         let num = i&-i;
//         this.dic[i] = preSum[i] - preSum[i-num];
//     }
//     //console.log(preSum,this.dic);
// };
/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
// NumArray.prototype.update = function(index, val) {
//     let y = val - this.data[index];
//     this.data[index] = val;
//     index+=1;
//     for(;index<=this.length;index+=index&-index) this.dic[index]+=y;//树状数组的对应点和父节点都要更新更改的差值
//     return 
// };

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
// NumArray.prototype.sumRange = function(left, right) {
//     const _this = this;
//     function getPresum(index){//树状数组的某点的前缀和为该点的index - lowbit(index)值相加，直到index减为0。
//         let total = 0;
//         for(;index>0;index-=index&-index) total+=_this.dic[index];
//         return total;
//     }
//     return getPresum(right+1) - getPresum(left);
// };
class SegNode{
    constructor(left,right,val=null){
        this.left = left;
        this.right = right;
        this.val = val;
    }
}
class SegTree{//线段树
    constructor(list){
        let len = list.length;
        this.data = list;
        this.tree = new Array(len*4);
        this.build(1,1,len);
        console.log(this.tree);
    }
    build(index,left,right){
        let node = new SegNode(left,right);
        if(left === right){
            node.val = this.data[left-1];
            this.tree[index] = node;
            return this.data[left-1];
        }
        this.tree[index] = node;
        let middle = ~~((left+right)/2);
        let leftVal = this.build(index*2,left,middle);
        let rightVal = this.build(index*2+1,middle+1,right);
        this.tree[index].val = leftVal+rightVal;
        return leftVal+rightVal;
    }
    change(index,val){//改变某个点
        const _this = this;
        index = index+1;
        function tranverse(idx,left,right){//从根开始找
            let node = _this.tree[idx];
            if(left === right){
                node.val = val;
                return node.val;
            }
            let middle = ~~((left+right)/2);
            if(left<=index&&index<=middle){
                tranverse(idx*2,left,middle);
            }else{
                tranverse(idx*2+1,middle+1,right);
            }
            node.val = _this.tree[idx*2].val + _this.tree[idx*2+1].val;
        }
        tranverse(1,1,this.data.length);
        console.log(this.tree);
    }
    query(start,end){
        const _this = this;
        start++;end++;
        function tranverse(idx,start,end){//从根开始找
            console.log(idx);
            let node = _this.tree[idx];
            const {left,right,val} = node;
            if((left===right) ||(left === start && right === end)){
                return val;
            }
            let middle = ~~((left+right)/2);
            if(end<=middle){
                return tranverse(idx*2,start,end);
            }else if(start>=(middle+1)){
                return tranverse(idx*2+1,start,end);
            }else{
                return tranverse(idx*2,start,middle)+tranverse(idx*2+1,middle+1,end);
            }
        }
        return tranverse(1,start,end);
    }
}
/**
 * @param {number[]} nums
*/
var NumArray = function(nums) {//线段树
    this.segTree = new SegTree(nums);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.segTree.change(index,val);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
   return this.segTree.query(left, right);
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
*/
let nameArr = ["NumArray", "sumRange", "update", "sumRange"]
let paramArr =  [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
let numArray = null;
for(let i=0;i<nameArr.length;i++){
    let name = nameArr[i]
    if(name === "NumArray") numArray = new NumArray(...paramArr[i]);
    else console.log(numArray[nameArr[i]](...paramArr[i]));
}