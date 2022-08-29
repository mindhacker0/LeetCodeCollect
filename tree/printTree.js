//655. 输出二叉树
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
 * @return {string[][]}
*/
function getDepth(node,level){
    if(node === null) return level;
    return Math.max(getDepth(node.left,level+1),getDepth(node.right,level+1));
}
var printTree = function(root) {
    let queue = [];
    let depth = getDepth(root,0);
    let len = (2<<depth-1)-1;//每层的长度
    let result = [];
    if(root) queue.unshift([root,len>>1,0]);
    while(queue.length){
        let [node,index,level] = queue.pop();
        if(typeof result[level]==="undefined"){
            result[level] = new Array(len).fill("");
        }
        result[level][index] = node.val.toString();
        if(node.left!==null) queue.unshift([node.left,index-2**(depth-level-2),level+1]);
        if(node.right!==null) queue.unshift([node.right,index+2**(depth-level-2),level+1]);
    }
    return result;
};
