//112. 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {//dfs
    let ans = false;
    function tranverseTree(node,sum){
        if(node === null||ans){
            return;
        }
        sum+=node.val;
        if(node.left == null && node.right === null){
            if(sum === targetSum) ans = true;
            return;
        }
        tranverseTree(node.left,sum);
        tranverseTree(node.right,sum);
    }
    tranverseTree(root,0);
    return ans;
};
var hasPathSum = function(root, targetSum) {//bfs
    if(root === null) return false;
    let ans = false;
    let queue = [];
    queue.push([root,0]);
    while(queue.length){
        let [node,sum] = queue.shift();
        sum+=node.val;
        if(node.left){
            queue.push([node.left,sum]);
        }
        if(node.right){
            queue.push([node.right,sum]);
        }
        if(!node.left && !node.right){
            console.log(sum);
            if(sum === targetSum){
                ans = true;
                break;
            }
        }
    }
    return ans;
};