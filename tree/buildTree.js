// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {//确定该二叉树中无重复元素
    let head = null;
    function builder(preorder,inorder,preStart,preEnd,inStart,inEnd){
        console.log(preorder.slice(preStart,preEnd),inorder.slice(inStart,inEnd));
        if(preStart >= preEnd || inStart >= inEnd) return null;
        let root = preorder[preStart];
        //console.log(root);
        let node = new TreeNode(root);
        let rootIndex = inorder.indexOf(root)-inStart;
        //console.log(rootIndex);
        //console.log(preStart+1,preStart+1+rootIndex,inStart,rootIndex);
        //console.log(preStart+1+rootIndex,preEnd,rootIndex+1,inEnd);
        node.left = builder(preorder,inorder,preStart+1,preStart+1+rootIndex,inStart,inStart+rootIndex);//左子树
        node.right = builder(preorder,inorder,preStart+1+rootIndex,preEnd,inStart+rootIndex+1,inEnd);//右子树
        return node;
    }
    head = builder(preorder,inorder,0,preorder.length,0,inorder.length);
    return head;
};
console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]));