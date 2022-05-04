//399. 除法求值
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
*/
function graphNode(val,neighborList,weight){
    this.val = val||null;
    this.neighborList = neighborList||[];//邻节点
    this.weight = weight||[];//权重
}
var calcEquation = function(equations, values, queries) {//dfs求两点间距离(65%)
    let nodeMap = new Map;
    for(let i=0;i<equations.length;i++){//邻接表
        let [from,to] = equations[i];
        let node = nodeMap.get(from);
        let toNode = nodeMap.get(to);
        if(!node){
            node = new graphNode(from);
            nodeMap.set(from,node);
        }
        if(!toNode){
            toNode = new graphNode(to);
            nodeMap.set(to,toNode);
        }
        node.neighborList.push(toNode);
        node.weight.push(values[i]);
        toNode.neighborList.push(node);
        toNode.weight.push(1/values[i]);
    }
    console.log(nodeMap);
    function division([start,end]){
        if((!nodeMap.get(start))||(!nodeMap.get(end))) return -1;
        let ans = -1;
        function dfs(gnode,visit,path){
            if(visit.has(gnode)) return;
            if(gnode.val === end){
                console.log('find',path);
                if(path.length){
                   ans = path.reduce((a,b)=>a*b,1);
                }else{
                    ans = 1;
                }
                return;
            }
            visit.add(gnode);
            for(let i=0;i<gnode.neighborList.length;i++){
                let next = gnode.neighborList[i]
                path.push(gnode.weight[i]);
                dfs(next,visit,path);
                path.pop();
            }
        }
        dfs(nodeMap.get(start),new Set,[]);
        return ans;
    }
    return queries.map(division);
};
class DisJointUnit{
    constructor(n){
        this.fa = new Array(n);
        this.weight = new Array(n);
        for(let i=0;i<n;i++){
            this.fa[i] = i;
            this.weight[i] = 1;
        }
        this.count = n;
    }
    union(x,y,val){//节点合并
        let a = this.find(x);
        let b = this.find(y);
        if(a!=b){
            this.count--;
            this.fa[a] = b;
            this.weight[a] = val*this.weight[y]/this.weight[x];
        }
    }
    find(x){//寻找某节点的根
        if(x===this.fa[x]) return x;
        else{
            let next = this.find(this.fa[x]);
            this.weight[x] = this.weight[x]*this.weight[this.fa[x]];
            this.fa[x] = next;
        }
        return this.fa[x];
    }
}
var calcEquation = function(equations, values, queries) {//带权并查集(92.18%)
    let total = new Map,idx = 0;
    for(let i=0;i<equations.length;i++){//便历计算可能点的数量
        let [from,to] = equations[i];
        if(!total.get(from)){
            total.set(from,idx);
            idx++;
        }
        if(!total.get(to)){
            total.set(to,idx);
            idx++;
        }
    }
    let dju = new DisJointUnit(idx);
    for(let i=0;i<equations.length;i++){//便历设置并查集集合关系
        let [from,to] = equations[i];
        dju.union(total.get(from),total.get(to),values[i]);
    }
    let result = [];
    for(let i=0;i<queries.length;i++){
        let [from,to] = queries[i];
        let ret = -1;
        let vf = total.get(from),vt = total.get(to);
        if(typeof vf!=='undefined' && typeof vt!=='undefined' && (dju.find(vf) === dju.find(vt))){
            ret = dju.weight[vf]/dju.weight[vt];
        }
        result.push(ret);
    }
    return result;
}
var calcEquation = function(equations, values, queries) {//flyod(8.64%)
    let total = new Map,idx = 0;
    for(let i=0;i<equations.length;i++){//便历计算可能点的数量
        let [from,to] = equations[i];
        if(!total.get(from)){
            total.set(from,idx);
            idx++;
        }
        if(!total.get(to)){
            total.set(to,idx);
            idx++;
        }
    }
    let neighborRect = [];//邻接矩阵
    for(let i=0;i<idx;i++){
        neighborRect[i] = [];
        for(let j=0;j<idx;j++){
            neighborRect[i][j] = i===j?1:10e7;
        }
    }
    for(let i=0;i<equations.length;i++){
        let [from,to] = equations[i];
        neighborRect[total.get(from)][total.get(to)] = values[i];
        neighborRect[total.get(to)][total.get(from)] = 1/values[i];
    }
    for(let k=0;k<idx;k++){
        for(let i=0;i<idx;i++){
            for(let j=0;j<idx;j++){
                if(neighborRect[i][k]!==10e7 && neighborRect[k][j]!==10e7)
                neighborRect[i][j] = Math.min(neighborRect[i][k]*neighborRect[k][j],neighborRect[i][j]);
            }
        }
    }
    return queries.map(([from,to])=>{
        let vf = total.get(from),vt = total.get(to);
        if(typeof vf === "undefined"||typeof vt === "undefined") return -1;
        let ans = neighborRect[vf][vt];
        return ans===10e7?-1:ans;
    })
}
//console.log(calcEquation([["a","b"],["b","c"]],[2.0,3.0],[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]));//[ 6, 0.5, -1, 1, -1 ]
console.log(calcEquation([["a","b"],["c","d"],["e","f"],["g","h"]],[4.5,2.3,8.9,0.44],[["a","c"],["d","f"],["h","e"],["b","e"],["d","h"],["g","f"],["c","g"]]));//[-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0]