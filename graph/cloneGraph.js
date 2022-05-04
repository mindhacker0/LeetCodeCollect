//133. 克隆图
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
*/
var cloneGraph = function(node) {
    if(node === null) return null;
    let queue = [];
    let head=new Node(node.val);
    queue.push([node,head]);
    let visitSet = new Set;
    let cloneMap = new Map;
    while(queue.length){
        let [{val,neighbors},next] = queue.shift();
        if(visitSet.has(val)) continue;
        visitSet.add(val);
        for(let i=0;i<neighbors.length;i++){
            if(cloneMap.get(neighbors[i].val)) next.neighbors[i] = newMap.get(neighbors[i].val);
            else{
              let snode = new Node(neighbors[i].val);
              next.neighbors[i] = snode;
              cloneMap.set(neighbors[i].val,snode);
            }
            queue.push([neighbors[i],next.neighbors[i]]);
        }
    }
    return head;
};