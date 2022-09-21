//652. 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {//哈希+判断相同的二叉树
    let nodeMap = [];
    let ans = [];
    function tranverse(node){//整理根相同的子树
        if(node === null) return 0;
        let left = tranverse(node.left);
        let right = tranverse(node.right);
        if(typeof nodeMap[left+right+1] === "undefined") nodeMap[left+right+1] = [];
        nodeMap[left+right+1].push(node);
        return left+right+1;
    }
    tranverse(root);
    function sameTree(node1,node2){
        if(node1===null && node2===null) return true;
        if(node1===null||node2===null||node1.val!==node2.val) return false;
        return sameTree(node1.left,node2.left) && sameTree(node1.right,node2.right);
    }
    nodeMap.forEach((arr)=>{//存在大于两个相同子树的情况
        if(arr && arr.length>1){
            for(let i=0;i<arr.length;i++){
                if(arr[i]===null) continue;
                let hasSame = false;
                for(let j=i+1;j<arr.length;j++){
                    if(sameTree(arr[i],arr[j])){
                       if(!hasSame){ ans.push(arr[i]);hasSame=true;}
                       arr[j]=null;
                    }
                }
            }
        }
    });
    return ans;
};
var findDuplicateSubtrees = function(root){
    let total = new Map;
    let ans = new Set;
    let idx = 0;
    function tranverse(node){//整理根相同的子树
        if(node === null) return 0;
        let tri = [node.val,tranverse(node.left),tranverse(node.right)]
        let hash = tri.toString();
        if(total.has(hash)){
           let [node,idx] = total.get(hash);
           ans.add(node);
           return idx;
        }else{
            total.set(hash,[node,++idx]);
            return idx;
        }
    }
    tranverse(root);
    return ans;
}