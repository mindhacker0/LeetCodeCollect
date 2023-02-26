//1129. 颜色交替的最短路径
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
function GraphNode(val){//图节点
    this.val = val;
    this.redIn = new Set;
    this.redOut = new Set;
    this.blueIn = new Set;
    this.blueOut = new Set;
}
//不需要多次遍历
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    let ans = new Array(n).fill(Infinity);
    let nodeMap = new Map;
    for(let i=0;i<n;i++) nodeMap.set(i,new GraphNode(i));
    //建图
    redEdges.forEach(([i,j])=>{
        let node = nodeMap.get(i),node2 = nodeMap.get(j);
        node.redOut.add(node2);
        node2.redIn.add(node);
    });
    blueEdges.forEach(([i,j])=>{
        let node = nodeMap.get(i),node2 = nodeMap.get(j);
        node.blueOut.add(node2);
        node2.blueIn.add(node);
    });
    //console.log(nodeMap)
    //广度优先搜索两点间的路径
    function bfsSearch(){
        let queue = [{level:0,node:0,pcolor:0}];
        let visit = new Set;
        while(queue.length){
            let {level,node,pcolor} = queue.shift();
            ans[node] = Math.min(ans[node],level);
            let gnode = nodeMap.get(node);
            if(pcolor!==1) gnode.redOut.forEach((x)=>{
                if(!visit.has(`${node}-${x.val}-1`)){
                    queue.push({level:level+1,node:x.val,pcolor:1});
                    visit.add(`${node}-${x.val}-1`);
                }
            });
            if(pcolor!==2) gnode.blueOut.forEach((x)=>{
                if(!visit.has(`${node}-${x.val}-2`)){
                    queue.push({level:level+1,node:x.val,pcolor:2});
                    visit.add(`${node}-${x.val}-2`);
                }
            });
        }
        return -1;
    }
    bfsSearch();
    return ans.map((val)=>val===Infinity?-1:val);
};
// console.log(shortestAlternatingPaths(3,[[0,1],[1,2]],[]))
console.log(shortestAlternatingPaths(5,[[2,0],[4,3],[4,4],[3,0],[1,4]],[[2,1],[4,3],[3,1],[3,0],[1,1],[2,0],[0,3],[3,3],[2,3]]))
console.log(shortestAlternatingPaths(9,[[8,6],[2,0],[8,3],[5,1],[1,3],[5,7],[6,8],[6,2]],[[0,1],[0,6],[1,4],[2,8],[8,8],[3,3],[3,6],[3,7],[2,1],[4,0],[8,1],[2,2],[1,7],[0,8],[6,5],[7,8],[5,0],[6,7],[5,4]]));