//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let len = 0,maxLen=0;
    function iteratorBinTree(node,depth){
        if(node === null){maxLen = depth>maxLen?depth:maxLen; return;}
        depth++;
        iteratorBinTree(node.left,depth);
        iteratorBinTree(node.right,depth);
    }
    iteratorBinTree(root,len);
    return maxLen;
};
let head = new TreeNode(3,null,null);
head.left = new TreeNode(9,null,null);
head.right = new TreeNode(20,null,null);
let node = head.right;
node.left = new TreeNode(15,null,null);
node.right = new TreeNode(7,null,null);
//console.log(head);
console.log(maxDepth(head));
