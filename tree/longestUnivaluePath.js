//687. 最长同值路径
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
 * @return {number}
*/
var longestUnivaluePath = function(root) {//存在左右子树相等的情况
    let max = 0;
    function tranverse(node){
        if(node===null) return 0;
        let left = tranverse(node.left),right = tranverse(node.right);
        left = (node.left&&node.left.val === node.val)?(left+1):0;
        right = (node.right&&node.right.val === node.val)?(right+1):0;
        max = Math.max(max,left+right);
        return Math.max(left,right);
    }
    tranverse(root);
    return max;
};