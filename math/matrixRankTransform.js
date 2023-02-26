//1632. 矩阵转换后的秩
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
//每一行和每一列的排序都加入到图关系中
function GraphNode(val){//图节点
    this.val = val || null;
    this.in = new Set;
    this.out = new Set;
}
class DisJointSet{//并查集
    constructor(len){
       this.fa = new Array(len);
       for(let i=0;i<len;i++) this.fa[i] = i;
    }
    find(index){
        return this.fa[index] === index?index:(this.fa[index] = this.find(this.fa[index]));
    }
    union(a,b){
        a = this.find(a);
        b = this.find(b);
        this.fa[a] = b;
    }
    isJoint(a,b){
        return this.find(a) === this.find(b);
    }
}
var matrixRankTransform = function(matrix) {//拓扑排序
    let m = matrix.length,n = matrix[0].length;
    let djs = new DisJointSet(m*n);
    for(let i=0;i<m;++i){
        let nodeObj = Object.create(null);
        for(let j=0;j<n;++j){
            if(typeof nodeObj[matrix[i][j]] === "undefined") nodeObj[matrix[i][j]] = i*n+j;
            else{
                djs.union(nodeObj[matrix[i][j]],i*n+j);
            }
        }
    }
    for(let i=0;i<n;++i){
        let nodeObj = Object.create(null);
        for(let j=0;j<m;++j){
            if(typeof nodeObj[matrix[j][i]] === "undefined") nodeObj[matrix[j][i]] = j*n+i;
            else{
                djs.union(nodeObj[matrix[j][i]],j*n+i);
            }
        }
    }
    // console.log(djs);
    let nodeMap = new Map;//保存图节点
    for(let i=0;i<m;++i){//行关系建图
        let arr = [];
        for(let j=0;j<n;++j){
            let index = djs.find(i*n+j);
            if(!nodeMap.get(index))  nodeMap.set(index,new GraphNode(matrix[i][j]));
            arr.push({value:matrix[i][j],index});
        }
        arr.sort((a,b)=>a.value-b.value);
        let node = nodeMap.get(arr[0].index);
        for(let k=1;k<arr.length;++k){
            if(arr[k-1].value === arr[k].value) continue;
            let now = nodeMap.get(arr[k].index);
            node.in.add(now);
            now.out.add(node);
            node = nodeMap.get(arr[k].index);
        }
    }
    for(let i=0;i<n;++i){//列关系建图
        let arr = [];
        for(let j=0;j<m;++j){
            let index = djs.find(j*n+i);
            if(!nodeMap.get(index))  nodeMap.set(index,new GraphNode(matrix[j][i]));
            arr.push({value:matrix[j][i],index});
        }
        arr.sort((a,b)=>a.value-b.value);
        let node = nodeMap.get(arr[0].index);
        for(let k=1;k<arr.length;++k){
            if(arr[k-1].value === arr[k].value) continue;
            let now = nodeMap.get(arr[k].index);
            node.in.add(now);
            now.out.add(node);
            node = nodeMap.get(arr[k].index);
        }
    }
    //console.log(nodeMap);
    let rank = new Map;
    function GraphSort(graph,index){
        let level = [];
        graph.forEach((val,key) => {
            if(val.out.size === 0){
                level.push(key);
                rank.set(key,index);
            }
        });
        //console.log(level);
        level.forEach((val)=>{
            let node = graph.get(val);
            node.in.forEach((cnode)=>{
                cnode.out.delete(node);
            });
            graph.delete(val);
        })
        level.length && GraphSort(graph,index+1);
    }
    GraphSort(nodeMap,1);
    //console.log(rank,nodeMap);
    //替换成新的矩阵
    let ans = [];
    for(let i=0;i<matrix.length;++i){
        ans[i] = [];
        for(let j=0;j<matrix[i].length;++j){
            ans[i].push(rank.get(djs.find(i*n+j)));
        }
    }
    return ans;
}
// console.log(matrixRankTransform([[7,3,6],[1,4,5],[9,8,2]]))
console.log(matrixRankTransform([[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]));//[ [ 4, 2, 3 ], [ 1, 3, 4 ], [ 5, 1, 6 ], [ 1, 3, 4 ] ]
console.log(matrixRankTransform([[-37,-26,-47,-40,-13],[22,-11,-44,47,-6],[-35,8,-45,34,-31],[-16,23,-6,-43,-20],[47,38,-27,-8,43]]));//[[3,4,1,2,7],[9,5,3,10,8],[4,6,2,7,5],[7,9,8,1,6],[12,10,4,5,11]]
