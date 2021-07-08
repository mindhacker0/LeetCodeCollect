//Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let totalPath = [];
    function tranverse(node,arr){
        if(node === null) return;
        arr.push(node.val);
        if(node.left === null && node.right === null){
            console.log(arr);
            totalPath.push(arr.join("->"))
            return;
        }
        tranverse(node.left,[].concat(arr));
        tranverse(node.right,[].concat(arr));
    }
    tranverse(root,[]);
    return totalPath;
};
let head = new TreeNode(2);
head.left =  new TreeNode(3);
head.right =  new TreeNode(4);
let node = head;
node = node.left;
node.left = new TreeNode(5);
console.log(binaryTreePaths(head));