function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
*/
var isBalanced = function(root) {
    let result = true;
    function tranverse(node,deep){
        if(node === null){
            return deep;
        }
        let deepleft = tranverse(node.left,deep+1);
        let deepright = tranverse(node.right,deep+1);
        console.log(deepleft,deepright);
        if(deepright - deepleft > 1 || deepright - deepleft < -1) result = false;
        return Math.max(deepleft,deepright);
    }
    tranverse(root,0);
    return result;
};
let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
// let left = tree.left;
// left.left = new TreeNode(3);
// left.right = new TreeNode(3);
let right = tree.right;
right.left = new TreeNode(4);
right.right = new TreeNode(4);
console.log(isBalanced(tree));