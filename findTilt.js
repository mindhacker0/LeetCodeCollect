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
var findTilt = function(root) {
    let result = 0;
    function tranverse(node){
        if(node === null) return 0;
        if(node.left === null && node.right === null) return node.val;
        let res = tranverse(node.left) + tranverse(node.right)
        console.log(res,node.left?.val,node.right?.val);
        return res;
    }
    result = tranverse(root)
    return result;
};
var testTree = new TreeNode(5,null,null);
var head = testTree;
testTree.left = new TreeNode(3,null,null);
testTree.right = new TreeNode(6,null,null);
head = testTree.left;
head.left = new TreeNode(2,null,null);
head.right = new TreeNode(4,null,null);
head = head.left;
head.left = new TreeNode(1,null,null);
head = testTree.right;
head.right = new TreeNode(8,null,null);
head = head.right;
head.left = new TreeNode(7,null,null);
head.right = new TreeNode(9,null,null);
console.log(findTilt(testTree));