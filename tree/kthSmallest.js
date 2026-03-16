// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（k 从 1 开始计数）。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {//
    function recur(node){
        if(node === null) return 0;
        let leftCount = recur(node.left);
        if(leftCount >= k) return leftCount;
        if(leftCount === k-1) return node.val;
        let rightCount = recur(node.right);
        return leftCount+rightCount+1;
    }
    return recur(root);
};