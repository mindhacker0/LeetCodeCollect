function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function arrayToToBinTree(arr){//有bug
    if(arr.length === 0) return null;
    let head = new TreeNode(arr[0]);
    function tranverse(node,level){
        let leftval = arr[(level<<1)+1];
        let rightval = arr[(level<<1)+2];
        if((leftval===null && rightval===null)||(typeof leftval === "undefined"&&typeof rightval === "undefined")) return;
        node.left = new TreeNode(leftval);
        node.right = new TreeNode(rightval);
        if(leftval!==null) tranverse(node.left,(level<<1)+1);
        if(rightval!==null) tranverse(node.right,(level<<1)+2);
    }
    tranverse(head,0);
    return head;
}
module.exports = {
    arrayToToBinTree
}
