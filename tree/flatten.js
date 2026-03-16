// 114. 二叉树展开为链表
// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var flatten = function(root) {
    let listRoot = new ListNode(0);
    let current = listRoot;
    function tranverse(node){
        if(node === null) return;
        current.next = new ListNode(node.val);
        current = current.next;
        tranverse(node.left);
        tranverse(node.right);
    }
    tranverse(root);
    return listRoot.next;
};
