//107. 二叉树的层序遍历 II
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
    if(root === null) return []
    let queue = [];
    queue.push([root,0]);
    let ans = [];
    while(queue.length){
        let [node,level] = queue.shift();
        if(typeof ans[level] === "undefined") ans[level] = [];
        ans[level].push(node.val);
        if(node.left) queue.push([node.left,level+1]);
        if(node.right) queue.push([node.right,level+1]);
    }
    return ans.reverse();
};
var levelOrderBottom = function(root) {
    if(root === null) return []
    let queue = [];
    queue.push(root);
    let ans = [];
    while(queue.length){
        let len = queue.length,arr = [];
        for(let i=0;i<len;i++){
            let node = queue.shift();
            arr.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        ans.unshift(arr);
    }
    return ans;
};