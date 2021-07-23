function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
* @param {TreeNode} root
* @return {TreeNode}
*/
var mirrorTree = function(root) {
    if(root === null) return null;
    let mTree = new TreeNode(null);
    function tranverse(node,mNode){
        if(node === null) return;
        mNode.val = node.val;
        if(node.right!==null) mNode.left = new TreeNode(null);
        if(node.left!==null)mNode.right = new TreeNode(null);
        tranverse(node.left,mNode.right);
        tranverse(node.right,mNode.left);
    }
    tranverse(root,mTree);
    console.log(mTree);
    return mTree;
};
let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
let left = tree.left;
left.left = new TreeNode(1);
left.right = new TreeNode(3);
let right = tree.right;
right.left = new TreeNode(6);
right.right = new TreeNode(9);
console.log(mirrorTree(tree));