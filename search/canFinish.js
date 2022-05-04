//207. 课程表
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
*/
function MapNode(val){
    this.val = val;
    this.inSet = new Set();
    this.outSet = new Set();
}
var canFinish = function(numCourses, prerequisites) {//拓扑排序(22.39%)
    let map = new Map;
    for(let i=0;i<numCourses;i++){
        map.set(i,new MapNode(i));
    }
    for(let i=0;i<prerequisites.length;i++){
        let [x,y] = prerequisites[i];
        map.get(x).inSet.add(y);
        map.get(y).outSet.add(x);
    }
    let hasin = true;
    while(hasin){
        hasin = false;
        let deleteList = [];
        map.forEach(({val,inSet,outSet})=>{
            if(inSet.size === 0){//有入度为0的节点
                hasin = true;
                for(let out of outSet){
                    map.get(out).inSet.delete(val);
                }
                deleteList.push(val);
            }
        });
        for(let i=0;i<deleteList.length;i++){
            map.delete(deleteList[i]);
        }
    }
    return map.size === 0;
};
var canFinish = function(numCourses, prerequisites) {//dfs
    let map = new Map;
    let ans = true;
    for(let i=0;i<numCourses;i++){
        map.set(i,new MapNode(i));
    }
    for(let i=0;i<prerequisites.length;i++){
        let [x,y] = prerequisites[i];
        map.get(x).inSet.add(y);
        map.get(y).outSet.add(x);
    }
    let visit = new Array(numCourses).fill(0);
    function dfs(node){
        if(!node) return;
        let {val,outSet} = node;
        visit[val]  = 1;
        for(let k of outSet){
            if(visit[k] === 0) dfs(map.get(k));
            if(visit[k] === 1){
                ans = false;
                return;
            }
        }
        visit[val] = 2;
    }
    for(let i=0;i<numCourses;i++){
        if(visit[i]) continue;
        dfs(map.get(i));
    }
    return ans;
}
console.log(canFinish(1,[]));//true
console.log(canFinish(2,[[1,0]]));//true
console.log(canFinish(2,[[1,0],[0,1]]));//false
console.log(canFinish(5,[[1,4],[2,4],[3,1],[3,2]]));///true
console.log(canFinish(4,[[2,0],[1,0],[3,1],[3,2],[1,3]]));//false
console.log(canFinish(20,[[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]));//false


