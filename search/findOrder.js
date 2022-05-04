//210. 课程表 II
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
*/
var findOrder = function(numCourses, prerequisites) {//拓扑排序bfs(93.65%)
    let outMap = new Array(numCourses);//出边数组
    let inSum = new Array(numCourses).fill(0);//入边统计
    for(let i=0;i<prerequisites.length;i++){//初始化边
        let [outval,inval] = prerequisites[i];
        inSum[outval]++;
        if(typeof outMap[inval] === "undefined") outMap[inval] = [];
        outMap[inval].push(outval);
    }
    //console.log(outMap,inSum)
    let ans = [];
    let hasZer = true;
    while(hasZer){
        hasZer = false;
        for(let i=0;i<inSum.length;i++){
            if(inSum[i]===0){
                hasZer = true;
                if(outMap[i]){
                    for(let j=0;j<outMap[i].length;j++){
                        inSum[outMap[i][j]]--;
                    }
                }
                ans.push(i);
                inSum[i] = -1;
            }
        }
    }
    return ans.length === numCourses?ans:[];
};
var findOrder = function(numCourses, prerequisites) {//dfs
    let outMap = new Array(numCourses);//出边数组
    let inSum = new Array(numCourses).fill(0);//入边统计
    for(let i=0;i<prerequisites.length;i++){//初始化边
        let [outval,inval] = prerequisites[i];
        inSum[outval]++;
        if(typeof outMap[inval] === "undefined") outMap[inval] = [];
        outMap[inval].push(outval);
    }
    //console.log(outMap,inSum)
    let ans = [];
    let visit = new Array(numCourses).fill(0);
    function dfs(i){
        visit[i] = 1;//正在搜索
        if(outMap[i]){
            for(let j=0;j<outMap[i].length;j++){
                if(visit[outMap[i][j]] === 0) dfs(outMap[i][j])
                if(visit[outMap[i][j]] === 1) return;
            }
        }
        visit[i] = 2;
        ans.unshift(i);
    }
    for(let i=0;i<numCourses;i++){
        if(visit[i]) continue;
        dfs(i);
    }
    return ans.length === numCourses?ans:[];
};
console.log(findOrder(4,[[1,0],[2,0],[3,1],[3,2]]))
console.log(findOrder(1,[]));//true
console.log(findOrder(2,[[1,0]]));//true
console.log(findOrder(2,[[1,0],[0,1]]));//false
console.log(findOrder(5,[[1,4],[2,4],[3,1],[3,2]]));///true
console.log(findOrder(4,[[2,0],[1,0],[3,1],[3,2],[1,3]]));//false
console.log(findOrder(20,[[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]));//false