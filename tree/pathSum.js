//113. 路径总和 II
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
 * @return {number[][]}
*/
var pathSum = function(root, targetSum) {//深度优先(87.29%)
    let ans = [];
    function tranverse(node,sum,arr){
        if(node === null) return;
        if(node.left === null && node.right === null){
            sum+=node.val;
            if(sum === targetSum){
               ans.push([].concat(arr,[node.val]));
            }
            return;
        }
        arr.push(node.val);
        tranverse(node.left,sum+node.val,arr);
        arr.pop();
        arr.push(node.val);
        tranverse(node.right,sum+node.val,arr);
        arr.pop();
    }
    tranverse(root,0,[]);
    return ans;
};
var pathSum = function(root, targetSum) {//广度优先(21.67%)
    if(root === null) return []
    let queue = [];
    let ans = [];
    queue.push([root,[],0]);
    while(queue.length){
        let [node,arr,sum] = queue.shift();
        if(node.left === null && node.right === null){
            sum+=node.val;
            if(sum === targetSum){
                arr.push(node.val)
                ans.push(arr);
            }
        }
        if(node.left){
            queue.push([node.left,[...arr,node.val],sum+node.val]);
        } 
        if(node.right){
            queue.push([node.right,[...arr,node.val],sum+node.val]);
        } 
    }
    return ans;
}
