function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
//102. 二叉树的层序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
*/
// var levelOrder = function(root) {//递归(89.50%)
//     let arr = [];
//     function tranverse(node,level){
//         if(node === null) return;
//         if(typeof arr[level] === 'undefined') arr[level] = [];
//         arr[level].push(node.val);
//         tranverse(node.left,level+1);
//         tranverse(node.right,level+1);
//     }
//     tranverse(root,0);
//     return arr;
// }
var levelOrder = function(root) {//非递归
    if(root === null) return [];
    let arr = [];
    let queue = [];
    let level = 0;
    queue.push(root);
    while(queue.length){
        if(typeof arr[level] === "undefined") arr[level] = [];
        let len = queue.length;
        for(let i=0;i<len;i++){
            let node = queue.shift();
            arr[level].push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        level++;
    }
    return arr;
}
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
console.log(levelOrder(tree))