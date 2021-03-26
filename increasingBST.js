//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root){
	let parentNode=null;
	iteratorTree(root,parentNode);
    function iteratorTree(node){
	   if(node.right!==null) iteratorTree(node.right);
       let parent = new TreeNode(node.val,null,null);
	   parent.right = parentNode;
	   parentNode = parent;
	   if(node.left!==null) iteratorTree(node.left);
    }
	return parentNode;
};
var testTree = new TreeNode(5,null,null);
var head = testTree;
testTree.left = new TreeNode(3,null,null);
testTree.right = new TreeNode(6,null,null);
head = testTree.left;
head.left = new TreeNode(2,null,null);
head.right = new TreeNode(4,null,null);
head = head.left;
head.left = new TreeNode(1,null,null);
head = testTree.right;
head.right = new TreeNode(8,null,null);
head = head.right;
head.left = new TreeNode(7,null,null);
head.right = new TreeNode(9,null,null);
console.log(increasingBST(testTree));