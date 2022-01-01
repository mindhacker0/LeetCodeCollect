function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {Node} root
 * @return {Node}
*/
var treeToDoublyList = function(root) {
    if(root === null) return null;
    let nodeList = [],linkHead=null,linkNode=null;
    let head = null;
    function tranverse(node){
        if(node === null) return;
        tranverse(node.left);
        nodeList.push(node);
        tranverse(node.right);
    }
    tranverse(root);
    for(let i in nodeList){
        if(!linkHead){
            linkHead = nodeList[i]
            linkNode = linkHead;
        }else{
            linkNode.right = nodeList[i];
            linkNode.right.left = linkNode;
            linkNode = linkNode.right;
        }
    }
    head = linkHead;
    linkHead.left = linkNode;
    linkNode.right = linkHead;
    return linkHead;
};
let tree = new Node(4);
tree.left = new Node(2);
tree.right = new Node(5);
let left = tree.left;
left.left = new Node(1);
left.right = new Node(3);
console.log(treeToDoublyList(tree))