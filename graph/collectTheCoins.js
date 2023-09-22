//2603. 收集树中金币
// 一开始，你需要选择树中任意一个节点出发。你可以执行下述操作任意次：
// 收集距离当前节点距离为 2 以内的所有金币，或者
// 移动到树中一个相邻节点。
// 你需要收集树中所有的金币，并且回到出发节点，请你返回最少经过的边数。
// 如果你多次经过一条边，每一次经过都会给答案加一。
/**
 * @param {number[]} coins
 * @param {number[][]} edges
 * @return {number}
*/
function GraphNode(val,coins,neighbors){
    this.val = val === undefined ? 0 : val;
    this.coins = coins||0;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}
var collectTheCoins = function(coins, edges) {
    let len = coins.length;
    let nodeList = new Array(len);
    for(let i=0;i<len;++i){
        nodeList[i] = new GraphNode(i,coins[i]);
    }
    for(let i=0;i<edges.length;++i){
        const [x,y] = edges[i];
        nodeList[x].neighbors.push(y);
        nodeList[y].neighbors.push(x);
    }
    //console.log(nodeList);
    for(let i=0;i<len;++i){//从任意的节点出发
        collect(nodeList[i]);
    }
    function collect(startNode){//bfs
        let queue = [startNode];
        let visit = new Set;
        while(queue.length){
            let node = queue.shift();
            if(visit.has(node.val)) continue;
            visit.add(node.val);
            // console.log(node);
            for(let i=0;i<node.neighbors.length;++i){
                queue.push(node); 
            }
        }
    }
    console.log(distance(nodeList[7],nodeList[7]));
    function distance(node1,node2){// 图中两个节点间的最短距离,双向bfs
        let queue = [
            [[node1,0]],
            [[node2,0]]
        ];
        let now,visits = [new Map,new Map];
        if(node1.val === node2.val) return 0;
        while(queue[0].length || queue[1].length){
            now = (queue[0].length && (queue[0].length<queue[1].length||(queue[0].length===queue[1].length && now!==0)))?0:1;
            let [node,step] = queue[now].shift();
            visits[now].set(node.val,step);
            for(let i=0;i<node.neighbors.length;++i){
                if(visits[now].has(node.neighbors[i])) continue;
                visits[now].set(node.neighbors[i],step+1);
                if(visits[(now+1)%2].has(node.neighbors[i])) return step+1+visits[(now+1)%2].get(node.neighbors[i]);
                queue[now].push([nodeList[node.neighbors[i]],step+1]);
            }
        }
        return Infinity;
    }
};
// const coins = [1,0,0,0,0,1];
// const edges = [[0,1],[1,2],[2,3],[3,4],[4,5]];
const coins = [0,0,0,1,1,0,0,1];
const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[5,6],[5,7]];
console.log(collectTheCoins(coins, edges));