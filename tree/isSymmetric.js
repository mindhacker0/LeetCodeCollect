function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
*/
var isSymmetric = function(root) {
    let leftArr = [],rightArr=[];
    function tranverse(node,leftArr,rightArr,level){
        if(node === null) return;
        level++;
        let left = tranverse(node.left,leftArr,rightArr,level);
        let right = tranverse(node.right,leftArr,rightArr,level);
        if(typeof leftArr[level] === "undefined") leftArr[level] = new Array;
        if(typeof rightArr[level] === "undefined") rightArr[level] = new Array;
        // if(left!==undefined){
            leftArr[level].push(left);
        // }
        // if(right!==undefined){
            rightArr[level].push(right);
        // }
        return node.val;
    }
    function isMirrorArray(arr){
        let i = 0,j = arr.length-1;
        while(i<j){
            if(arr[i]!==arr[j]){
                console.log(arr,arr[i],arr[j]);
                return false;
            }
            i++;j--;
        }
        return true;
    }
    tranverse(root,leftArr,rightArr,-1);
    console.log(leftArr,rightArr);
    for(let i= 0;i<leftArr.length;i++){
        if(!isMirrorArray([...leftArr[i],...rightArr[i]])) return false;
    }
    return true;
};
var isSymmetric = function(root) {
    if(root===null) return true;
    function check(left,right){
        if(!left.val && !right.val) return true;
        if(!left.val || !right.val) return false;
        return (left.val === right.val) && check(left.left,right.right) && check(left.right,right.left);
    }
    return check(root.left,root,right);
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
console.log(isSymmetric(tree));