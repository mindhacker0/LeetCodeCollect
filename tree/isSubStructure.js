//剑指 Offer 26. 树的子结构
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
*/
var isSubStructure = function(A, B) {//93.45%
    if(B===null) return false;
    let result = false;
    function compare(nodea,nodeb){
        if(nodeb === null) return true;
        if(nodea === null || (nodea.val !== nodeb.val)) return false;
        return compare(nodea.left,nodeb.left) && compare(nodea.right,nodeb.right);
    }
    function tranverse(node){
        if(node === null) return;
        if(node.val === B.val){
            result = result|compare(node,B);
            if(result) return;
        }
        tranverse(node.left);
        tranverse(node.right);
    }
    tranverse(A);
    return result;
};