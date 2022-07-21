//814. 二叉树剪枝
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
 * @return {TreeNode}
 */
 var pruneTree = function(root) {
    function tranverse(node){
        if(node === null) return null;
        if(node.left === null && node.right === null) return node.val;
        let left = tranverse(node.left);
        let right = tranverse(node.right);
        if(left === 0) node.left = null;
        if(right === 0) node.right = null;
        return left|right|node.val;
    }
    tranverse(root);
    if(root.val === 0 && root.left === null && root.right === null) return null;
    return root;
};
