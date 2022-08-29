function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
*/
var isValidBST = function(root) {
    if(root === null) return true;
    let arr = [];
    let ans = true;
    function tranverse(node){
        if(node === null) return;
        tranverse(node.left);
        if(arr[arr.length-1]>node.val) ans = false;
        arr.push(node.val);
        tranverse(node.right);
    }
    tranverse(root);
    return ans;
};
var isValidBST = function(root) {//(48.92%)
    let prev = null;
    let result = true;
    function tranverse(node){
        if(node===null||!result) return;
        tranverse(node.left);
        //console.log(node.val);
        if(prev !== null && node.val<=prev){
            result = false;
            return;
        }
        prev = node.val;
        tranverse(node.right);
    }
    tranverse(root);
    return result;
}
var isValidBST = function(root) {//(48.92%)
    let result = true;
    function tranverse(node,min,max){
        if(node===null) return true;
        if(node.val<min || node.val>max) return false;
        return tranverse(node.left,min,node.val) && tranverse(node.right,node.val,max);
    }
    tranverse(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);
    return tranverse;
}
let tree = new TreeNode(4);
tree.left = new TreeNode(1);
tree.right = new TreeNode(5);
let right = tree.right;
right.left = new TreeNode(5);
right.right = new TreeNode(6);
console.log(isValidBST(tree));