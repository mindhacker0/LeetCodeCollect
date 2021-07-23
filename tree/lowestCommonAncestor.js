function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q){//普通树
    if(root === null || root === p|| root ===q) return root;
    let l = lowestCommonAncestor(root.left,p,q);
    let r = lowestCommonAncestor(root.right,p,q);
    return l?(r?root:l):r;
};
// var lowestCommonAncestor = function(root, p, q){//二叉搜索树
//     let vNode = root;
//     function tranverse(node){
//         if(node === null) return;
//         if(node.val > p && node.val > q) tranverse(node.left);
//         else if(node.val < p && node.val < q) tranverse(node.right);
//         else vNode = node;
//     }
//     tranverse(root);
//     return vNode;
// };
let tree = new TreeNode(6);
tree.left = new TreeNode(2);
tree.right = new TreeNode(8);
let left = tree.left;
left.left = new TreeNode(0);
left.right = new TreeNode(4);
let right = tree.right;
right.left = new TreeNode(7);
right.right = new TreeNode(9);
right = left.right;
right.left = new TreeNode(3);
right.right = new TreeNode(5);
console.log(lowestCommonAncestor(tree,2,8));