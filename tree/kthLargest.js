function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
*/
var kthLargest = function(root, k){
    let max = new Array();
    function tranverse(node){
        if(node === null) return;
        inertNum(node.val);
        tranverse(node.left);
        tranverse(node.right);
    }
    function inertNum(num){
      if(max.length === 0) return max.push(num);
      var i = 0;
      while(num<max[i] && i<k) i++;
      if(max[i]!==num) max.splice(i,0,num);
    }
    tranverse(root);
    console.log(max);
    return max[k-1];
};
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
let left = tree.left;
left.left = new TreeNode(3);
left.right = new TreeNode(4);
let right = tree.right;
right.left = new TreeNode(4);
right.right = new TreeNode(3);
console.log(kthLargest(tree,2));