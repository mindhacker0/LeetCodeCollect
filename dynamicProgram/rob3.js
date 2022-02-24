//337. 打家劫舍 III
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
 * @return {number}
 */
 var rob = function(root) {//树形动态规划
    let map = new Map();
    function tranverse(node){
        if(node===null) return;
        tranverse(node.left);
        tranverse(node.right);
        if(map.get(node.left) === undefined) map.set(node.left,[0,0]);
        if(map.get(node.right) === undefined) map.set(node.right,[0,0]);
        map.set(node,[
            Math.max(map.get(node.left)[0],map.get(node.left)[1])+
            Math.max(map.get(node.right)[0],map.get(node.right)[1]),
            map.get(node.left)[0]+map.get(node.right)[0]+
            node.val
        ]);
    }
    tranverse(root);
    //console.log(map);
    return Math.max(map.get(root)[0],map.get(root)[1])
};