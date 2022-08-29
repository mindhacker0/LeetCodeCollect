/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {//简单递归(72.02%)
    if(nums.length===0) return null;
    let max=-1,maxIndex=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max = nums[i];
            maxIndex = i;
        }
    }
    const node = new TreeNode(max);
    node.left = constructMaximumBinaryTree(nums.slice(0,maxIndex));
    node.right = constructMaximumBinaryTree(nums.slice(maxIndex+1));
    return node;
};
class segNode{
    constructor(val,range){
        this.val = val||0;
        this.range = range||[];
    }
}
class segTree{//线段树
    constructor(data){
        this.data = data;
        this.cache = new Array(data.length*4);
        this.init();
    }
    init(){//初始化val存的是最大值的下标
        const vm = this;
        function tranverse(index,left,right){
            if(left === right){
                vm.cache[index] = new segNode(left,[left,right]);
                return left;
            } 
            vm.cache[index] = new segNode(0,[left,right]);
            let mid = (left+right)>>1;
            let max;
            let idx1 = tranverse(index<<1,left,mid);
            let idx2 = tranverse((index<<1)+1,mid+1,right);
            max = vm.data[idx1]>vm.data[idx2]?idx1:idx2;
            vm.cache[index].val = max;
            return max;
        }
        tranverse(1,0,this.data.length-1);
    }
    query(l,r){//区间查询
        const vm = this;
        function tranverse(index,left,right){
            const {val,range:[start,end]} = vm.cache[index];
            if(start===end||(left === start && right === end)){
                return val;
            }
            let mid = (start+end)>>1;
            if(right<=mid){
                return tranverse(index<<1,left,right);
            }else if(left>=mid+1){
                return tranverse((index<<1)+1,left,right);
            }else{
                let max;
                let idx1 = tranverse(index<<1,left,mid);
                let idx2 = tranverse((index<<1)+1,mid+1,right);
                max = vm.data[idx1]>vm.data[idx2]?idx1:idx2;
                return max;
            }
        }
        return tranverse(1,l,r);
    }
}
var constructMaximumBinaryTree = function(nums) {//线段树维护区间的最大值下标，避免了每次都要查询最大值(6.70%)
    let segtree = new segTree(nums);
    function subArray(start,end){
        if(start>end) return null;
        if(start === end) return new TreeNode(nums[start]);
        let index = segtree.query(start,end);
        console.log(start,end,index);

        let node = new TreeNode(nums[index]);
        node.left = subArray(start,index-1);
        node.right = subArray(index+1,end);
        return node;
    }
    return subArray(0,nums.length-1);
}
var constructMaximumBinaryTree = function(nums) {//单调栈(34.92%)
    let stack = [];
    for(let i=0;i<nums.length;i++){
        let node = new TreeNode(nums[i]);
        while(stack.length && stack[stack.length-1]<nums[i]){
            node.left = stack.pop();
        }
        if(stack.length>0) stack[stack.length-1].right = node;
        stack.push(node);
        console.log(stack);
    }
    return stack[0];
}
// console.log(constructMaximumBinaryTree([1,2,3,4,5,6]));
console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));