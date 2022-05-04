//450. 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let searchSet = new Set;
    function findVal(node,p){
        if(node === null) return null;
        searchSet.add(node);
        if(node.val === p) return node;
        else if(node.val < p) return findVal(node.right,p);
        else return findVal(node.left,p);
    }
    let fNode = findVal(root,key);
    if(fNode === null) return root;
    let arr = Array.from(searchSet);
    arr.pop();
    let nNode = fNode;
    if(fNode.left===null&&fNode.right===null){//叶子结点直接删除
        if(arr.length ===0) return null;
        else{
            let parentN = arr[arr.length-1];
            if(parentN.left && parentN.left.val === key){
                parentN.left = fNode.right;
            }else if(parentN.right && parentN.right.val === key){
                parentN.right = fNode.right;
            }
        }
    }else if(fNode.left===null){//有右节点，删掉后挂到父节点
        if(arr.length ===0) return fNode.right;
        else{
            let parentN = arr[arr.length-1];
            if(parentN.left && parentN.left.val === key){
                parentN.left = fNode.right;
            }else if(parentN.right && parentN.right.val === key){
                parentN.right = fNode.right;
            }
        }
    }else if(fNode.right===null){//有左节点，删掉后挂到父节点
        if(arr.length ===0) return fNode.left;
        else{
            let parentN = arr[arr.length-1];
            if(parentN.left && parentN.left.val === key){
                parentN.left = fNode.left;
            }else if(parentN.right && parentN.right.val === key){
                parentN.right = fNode.left;
            }
        }
    }else{//删除的节点有左右两个子节点,和后继交换并删除
        let lNodeSet = new Set;
        nNode = nNode.right;
        while(nNode){
            lNodeSet.add(nNode);
            nNode = nNode.left;
        }
        let nextArr = Array.from(lNodeSet);
        let pNext = nextArr.pop();
        fNode.val = pNext.val;
        let parentN = nextArr.pop()||fNode;
        if(parentN.left && parentN.left.val === pNext.val){
            parentN.left = pNext.right;
        }else if(parentN.right && parentN.right.val === pNext.val){
            parentN.right = pNext.right;
        }
        //console.log(parentN,pNext)
    }
    return root;
};