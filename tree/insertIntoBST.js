//701. 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
*/

var insertIntoBST = function(root, val) {
    function findVal(node,val){
        if(node === null) return null;
        if(val > node.val){
             let findRight = findVal(node.right,val);
            return findRight===null?node:findRight;
        }else if(val < node.val){
            let findLeft = findVal(node.left,val);
            return findLeft===null?node:findLeft;
        }else{//找到了该值的节点
            return node;
        }
    }
    let finalNode =  findVal(root,val);
    let node = new TreeNode(val);
    if(finalNode!==null){
        if(val > finalNode.val) finalNode.right = node;
        if(val < finalNode.val) finalNode.left = node;
    }
    if(root === null) root = node;
    return root;
};
