// 108. 将有序数组转换为二叉搜索树
// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {//二分法
    function recur(l,r){
        if(l === r){
            return new TreeNode(nums[l]);
        }
        const mid = (l+r)>>1;
        const node = new TreeNode(nums[mid]);
        if(l<=mid-1) node.left = recur(l,mid-1);
        if(mid+1<=r) node.right = recur(mid+1,r);
        return node;
    }
    return recur(0,nums.length-1);
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
    this.height = 1;
}
class AVL{
    constructor(){
        this.root = null;
    }
    insert(val){
        this.root = this.tranverse(this.root,val);
    }
    updateHeight(node){
        return Math.max(node.left?.height||0,node.right?.height||0)+1;
    }
    spinLeft(node){//左旋 
        const nr = node.right;
        const nrl = nr.left;
        nr.left = node;
        node.right = nrl;
        node.height = this.updateHeight(node);
        nr.height = this.updateHeight(nr);
        return nr;
    }
    spinRight(node){//右旋  
        const nl = node.left;
        const nlr = nl.right;
        nl.right = node;
        node.left = nlr;
        node.height = this.updateHeight(node);
        nl.height = this.updateHeight(nl);
        return nl;
    }
    balanceFactor(node){//平衡因子                   
        return (node.left?.height||0)-(node.right?.height||0);
    }
    tranverse(node,val){//递归插入
        if(node === null) return new TreeNode(val);
        if(val<node.val){ 
            node.left = this.tranverse(node.left,val);
        }else if(val>node.val){
            node.right = this.tranverse(node.right,val);
        }else{
            return node;
        }
        node.height = this.updateHeight(node);
        let bfc =this.balanceFactor(node);
        if(node.left){
            if(val<node.left.val && bfc>1){
                return this.spinRight(node);
            }
            if(val<node.left.val && bfc<-1){
                node.left = this.spinRight(node.left);
                return this.spinLeft(node);
            }
        }
        if(node.right){
            if(val>node.right.val && bfc>1){
                node.right = this.spinLeft(node.right);
                return this.spinRight(node);
            }
            if(val>node.right.val && bfc<-1){
                return this.spinLeft(node);
            }
        }
        return node;
    }
}
var sortedArrayToBST = function(nums) {//二叉树的插入和旋转
    let avl = new AVL;
    for(let i=0;i<nums.length;++i){
        avl.insert(nums[i]);
    }
    return avl.root;
};