//1145. 二叉树着色游戏
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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    let lts = 0,rts = 0;
    function findBestPostion(node){//找到最优的节点 pEmpty父节点是否能用
        if(node == null) return 0;
        let weightF = findBestPostion(node.left);
        let weightR = findBestPostion(node.right);
        if(node.val === x){
            lts = weightF,rts = weightR; 
        }
        return weightF+weightR+1;
    }
    findBestPostion(root);
    return Math.max.call(null,lts,rts,n-lts-rts-1)*2>2;
};