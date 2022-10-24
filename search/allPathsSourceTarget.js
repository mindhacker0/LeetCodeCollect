//797. 所有可能的路径
/**
 * @param {number[][]} graph
 * @return {number[][]}
*/
var allPathsSourceTarget = function(graph) {//广度优先
    let ans = [];
    let queue = [];
    queue.push([graph[0],[0]]);
    while(queue.length){
        let [arr,path] = queue.shift();
        arr.forEach((val)=>{
            path.push(val);
            queue.push([graph[val],path.slice()]);
            path.pop();
        });
        console.log(arr.length,path)
        if(path[path.length-1]===graph.length-1) ans.push(path);
    }
    return ans;
};
// console.log(allPathsSourceTarget([[1,2],[3],[3],[]]));
// console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[],[4],[]]));
// console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));
console.log(allPathsSourceTarget([[2],[],[1]]));