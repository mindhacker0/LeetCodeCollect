//面试题 04.06. 后继者
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
*/
var inorderSuccessor = function(root, p) {
     let searchSet = new Set;
    function findVal(node,p){
       if(node === null) return null;
       searchSet.add(node);
       if(node.val === p) return node;
       else if(node.val < p) return findVal(node.right,p);
       else return findVal(node.left,p);
    }
    findVal(root,p.val);
   
    let arr = Array.from(searchSet);
    //console.log(arr);
    let pNode = arr.pop();
    let ans = null;
    if(pNode.right){//若一个节点有右子树，那么该节点的后继节点是其右子树中val值最小的节点
        pNode = pNode.right;
        while(pNode){
            ans = pNode;
            pNode = pNode.left;
        }
    }else{//在经过的查询点中最接近目标的那个
        let mar = 10e7;
        while(arr.length){
            let node = arr.pop();
            
            if(node.val>p.val && (node.val -p.val)<mar){
                ans = node;
                mar = node.val - p.val;
            }
            //console.log(node,ans,node.val,p.val);
        }
    }
    return ans;
};