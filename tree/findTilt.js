//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
//563. 二叉树的坡度
/**
* @param {TreeNode} root
* @return {number}
*/
var findTilt = function(root) {
    let result = 0;
    function tranverse(node){
        if(node===null) return 0;
        if(node.left === null && node.right === null) return node.val;
        let leftVal = node.left===null?0:tranverse(node.left);
        let rightVal = node.right === null?0:tranverse(node.right);
        result+=Math.abs(leftVal-rightVal);
        return  leftVal+rightVal+node.val;
    }
    tranverse(root);
    return result;
};
var testTree = new TreeNode(4,null,null);
var head = testTree;
testTree.left = new TreeNode(2,null,null);
testTree.right = new TreeNode(9,null,null);
head = testTree.left;
head.left = new TreeNode(3,null,null);
head.right = new TreeNode(5,null,null);
head = testTree.right;
head.right = new TreeNode(7,null,null);
console.log(findTilt(testTree));