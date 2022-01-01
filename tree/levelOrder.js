function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
*/
var levelOrder = function(root) {
    let arr = new Array;
    if(root === null) return arr;
    function tranverse(node){//层序遍历较为简单写法
        let stack= [];
        stack.push(node);
        while(stack.length){
            let elem = stack.shift();
            arr.push(elem.val);
            if(elem.left){
                stack.push(elem.left);
            }
            if(elem.right){
                stack.push(elem.right);
            }
        }
    }
    tranverse(root);
    return arr;
};
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