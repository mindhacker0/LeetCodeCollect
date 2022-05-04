//1584. 连接所有点的最小费用
/**
 * @param {number[][]} points
 * @return {number}
*/
function GraphNode(val,neighborList,weight){
    this.val = val||null;
    this.neighborList = neighborList||[];//邻节点
    this.weight = weight||[];//权重
}
var minCostConnectPoints = function(points) {//prime算法
    let edges = new Map;
    let len = points.length;
    let vist = new Array(len).fill(0);
    let finish = new Array(len).fill(0);
    vist[0] = 1;
    function makeEdges(start){//得出所有的无向边
        if(finish[start]) return;
        for(let i=0;i<len;i++){
            if(vist[i]===0){
                vist[i] = 1;
                let [x,y] = points[start],[x1,y1] = points[i];
                let dist = Math.abs(x-x1)+Math.abs(y-y1);//曼哈顿距离
                let startNode = edges.get(start);
                if(!startNode){
                    startNode = new GraphNode(points[start]);
                    edges.set(start,startNode);
                }
                let nextNode = edges.get(i);
                if(!nextNode){
                    nextNode = new GraphNode(points[i]);
                    edges.set(i,nextNode);
                }
                startNode.neighborList.push(i);
                startNode.weight.push(dist);
                nextNode.neighborList.push(start);
                nextNode.weight.push(dist);
                makeEdges(i);
                if(vist[i]!==2) vist[i] = 0;
            }
        }
        finish[start] = 1;
    }
    makeEdges(0);
    console.log(edges);
    // let selectSet = new Set,selectEdge = new Set;
    // selectSet.add(0);
    // let path = 0;
    // while(selectSet.size < len){
    //     let min=10e9,minIndex;
    //     for(let i=0;i<edges.length;i++){
    //         let [u,v,val] = edges[i];
    //         if((selectSet.has(u) && !selectSet.has(v)) && val<min){
    //             min =val;
    //             minIndex = i;
    //         }
    //     }
    //     let [u,v,val] = edges[minIndex];
    //     selectSet.add(v);
    //     selectEdge.add(edges[minIndex]);
    //     path+=val;
    // }    
    return ;
};
//console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]));
//console.log(minCostConnectPoints([[0,0],[1,1],[1,0],[-1,1]]));//4
console.log(minCostConnectPoints([[5,-17],[-3,-14],[-2,18],[-14,15],[-9,-17],[9,-16],[8,-3],[-15,11],[-12,17],[6,6],[4,3]]));