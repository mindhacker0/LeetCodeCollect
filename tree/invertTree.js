//226. 翻转二叉树
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
var invertTree = function(root) {//拷贝法
    if(root === null) return root;
    let head = new TreeNode(root.val);
    function tranverseTree(node,cnode){
        if(node === null) return;
        if(node.left){
            cnode.right = new TreeNode(node.left.val);
        }
        if(node.right){
            cnode.left = new TreeNode(node.right.val);
        }
        tranverseTree(node.left,cnode.right);
        tranverseTree(node.right,cnode.left);
    }
    tranverseTree(root,head);
    return head;
};
