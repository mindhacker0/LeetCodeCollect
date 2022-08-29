//623. 在二叉树中增加一行
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
 * @param {number} depth
 * @return {TreeNode}
*/
var addOneRow = function(root, val, depth) {//递龟(73.68%)
    function tranverse(node,level){
        if(node === null) return;
        if(level === depth-1){//到需要添加的上一层处理
            let addNodeLeft = new TreeNode(val,node.left,null);
            let addNodeRight = new TreeNode(val,null,node.right);
            node.left = addNodeLeft;
            node.right = addNodeRight;
        }else{
            tranverse(node.left,level+1);
            tranverse(node.right,level+1);
        }
    }
    if(depth === 1){//添加到头部情况特殊
        let addNodeLeft = new TreeNode(val,root,null);
        root = addNodeLeft;
    }else{
        tranverse(root,1);
    }
    return root;
};
var addOneRow = function(root, val, depth) {//bfs
    if(depth === 1){//添加到头部情况特殊
        return new TreeNode(val,root,null);
    }
    let queue = [];
    queue.push([root,1]);
    while(queue.length){
        if(queue[0].level === depth-1){
            while(queue[0].level === depth-1){
                let [node] = queue.shift();
                let addNodeLeft = new TreeNode(val,node.left,null);
                let addNodeRight = new TreeNode(val,null,node.right);
                node.left = addNodeLeft;
                node.right = addNodeRight;
            }
            return root;
        }else{
            let [node,level] = queue.shift();
            if(node.left) queue.push([node.left,level+1]);
            if(node.right) queue.push([node.right,level+1]);
        }
    } 
}