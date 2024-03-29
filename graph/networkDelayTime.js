//743. 网络延迟时间
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
*/
// var networkDelayTime = function(times, n, k) {//bellman-ford(96.48%)
//     let distance = new Array(n+1).fill(10e7);
//     distance[k] = 0;
//     let flag = true;
//     while(flag){
//         flag = false;
//         for(let i=0;i<times.length;i++){
//             let [x,y,z] = times[i];
//             if(distance[x]+z<distance[y]){
//                 distance[y] = distance[x]+z;
//                 flag = true;
//             }
//         }
//     }
//     let ans=-10e7;
//     for(let i=1;i<=n;i++){
//         ans=Math.max(ans,distance[i]);
//     }
//     return ans===10e7?-1:ans;
// }
// var networkDelayTime = function(times, n, k) {
//     let visit = new Array(n+1).fill(0);
//     let neighborList = [];
//     let route = new Array(n+1).fill(10e7);
//     for(let i=0;i<times.length;i++){
//         let [from,to,time] = times[i];
//         if(typeof neighborList[from]==="undefined"){
//             neighborList[from] = [];
//         }
//         neighborList[from].push([to,time]);
//     }
//     function dfs(start,sum){
//         if(typeof neighborList[start]==="undefined"||visit[start]===2){//没有出边，搜索完成
//             return;
//         } 
//         route[start] = Math.min(route[start],sum);
//         console.log(start,sum,visit);
//         for(let i=0;i<neighborList[start].length;i++){
//             let [to,time] = neighborList[start][i];
//             if(visit[to] === 0){
//                 visit[to] = 1;
//                 sum+=time;
//                 dfs(to,sum);
//                 sum-=time;
//             }
//         }
//         visit[start] = 2;
//     }
//     dfs(k,0);
//     console.log(neighborList,route);
//     let ans=-1;
//     for(let i=1;i<=n;i++){
//        if(route[i]===10e7) return -1;
//        ans = Math.max(ans,route[i]);
//     }
//     return ans;
// };
var networkDelayTime = function(times, n, k) {//djikstra(90.67%)
    let neighborList = [];
    let route = new Array(n+1).fill(10e7);
    let expand = new Array(n+1).fill(false);
    for(let i=0;i<times.length;i++){
        let [from,to,time] = times[i];
        if(typeof neighborList[from]==="undefined"){
            neighborList[from] = [];
        }
        neighborList[from].push([to,time]);
    }
    route[k] = 0;
    for(let round=0;round<n;round++){
        let min = 10e7,minNode = 0;
        for(let i=1;i<=n;i++){
            if(!expand[i] && route[i]<min){
                min = route[i];
                minNode = i;
            }
        }
        if(typeof neighborList[minNode] === "undefined"){
            expand[minNode] = true;
            continue;
        }
        let arr = neighborList[minNode];
        for(let i=0;i<arr.length;i++){
            let [to,time] = arr[i];
            if(route[minNode]+time < route[to]){
                route[to] = route[minNode]+time;
            }
        }
        expand[minNode] = true;
    }
    let ans = -10e7;
    for(let i=1;i<route.length;i++){
        ans = Math.max(ans,route[i]);
    }
    return ans===10e7?-1:ans;
}
var networkDelayTime = function(times, n, k) {//spfa(83.42%)
    let neighborList = [];
    let dist = new Array(n+1).fill(10e7);
    let vist = new Array(n+1).fill(0);
    for(let i=0;i<times.length;i++){
        let [from,to,time] = times[i];
        if(typeof neighborList[from]==="undefined"){
            neighborList[from] = [];
        }
        neighborList[from].push([to,time]);
    }
    let queue = [];
    dist[k] = 0;
    queue.push(k);
    while(queue.length){
        let now = queue.shift();
        vist[now] = 0;
        if(typeof neighborList[now]==="undefined"){continue;}
        let arr = neighborList[now];
        for(let i=0;i<arr.length;i++){
            let [to,time] = arr[i];
            if(dist[to]>dist[now]+time){
                dist[to] = dist[now]+time;
                if(vist[to]===0){
                    queue.push(to);
                    vist[to] = 1;
                }
            }
        }
    }
    //console.log(dist);
    let ans=-1;
    for(let i=1;i<=n;i++){
        if(dist[i]===10e7) return -1;
        ans = Math.max(ans,dist[i]);
    }
    return ans;
}
var networkDelayTime = function(times, n, k) {//floyd(65.28%)
    let nbRect = [];
    for(let i=0;i<n;i++){
        nbRect[i] = [];
        for(let j=0;j<n;j++){
            if(i===j) nbRect[i][j]=0;
            else nbRect[i][j] = 10e7;
        }
    }
    for(let s=0;s<times.length;s++){
        let [i,j,time]=times[s];
        nbRect[i-1][j-1] = time;
    }
    for(let m=0;m<n;m++)
        for(let i=0;i<n;i++)
        for(let j=0;j<n;j++)
        {
            nbRect[i][j] = Math.min(nbRect[i][m]+nbRect[m][j],nbRect[i][j]);
        }
    let ans=-1;
    for(let i=0;i<n;i++){
       if(nbRect[k-1][i]===10e7) return -1;
       ans = Math.max(ans,nbRect[k-1][i]);
    }
    return ans;
}
console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2));//2
// console.log(networkDelayTime([[1,2,1],[2,3,2],[1,3,2]],3,1));//2
// console.log(networkDelayTime([[1,2,1],[2,3,2],[3,1,2]],3,1));//3
console.log(networkDelayTime([[14,1,8],[11,2,25],[14,15,37],[3,7,70],[11,7,60],[13,11,87],[15,10,67],[13,10,58],[5,4,56],[9,3,26],[5,11,51],[11,4,92],[7,6,8],[7,10,95],[14,9,0],[4,13,1],[7,9,89],[3,14,24],[11,15,30],[13,2,91],[15,8,60],[1,4,96],[8,2,71],[6,8,38],[14,13,46],[2,12,48],[10,11,92],[8,12,28],[8,7,12],[9,13,82],[8,6,27],[3,2,65],[4,10,62],[11,13,55],[1,2,52],[8,3,98],[7,12,85],[6,12,97],[9,4,90],[2,4,23],[9,11,20],[1,14,61],[8,9,77],[6,5,80],[14,11,33],[9,8,54],[13,1,42],[13,8,13],[10,14,40],[9,7,18],[14,3,50],[14,6,83],[14,8,14],[2,1,86],[9,5,54],[11,5,29],[9,12,43],[9,2,74],[14,4,87],[12,7,98],[7,14,13],[4,12,33],[5,2,60],[15,11,33],[8,4,99],[9,6,98],[4,6,57],[6,11,5],[9,15,37],[1,3,30],[9,10,60],[13,12,73],[13,14,56],[1,11,13],[14,2,8],[4,15,60],[11,3,90],[2,5,86],[11,1,1],[13,4,2],[15,7,91],[15,4,51],[11,6,70],[2,7,51],[11,9,37],[4,2,92],[10,4,4],[7,2,30],[13,9,79],[8,15,41],[11,8,18],[15,2,4],[12,14,88],[12,6,9],[12,9,44],[1,6,87],[15,14,42],[4,9,41],[7,15,90],[4,1,84],[7,11,9],[3,11,75],[5,9,2],[2,11,96],[12,5,89],[6,15,25],[5,13,7],[15,5,32],[13,5,84],[7,5,9],[15,3,14],[12,13,4],[5,3,73],[6,9,85],[6,10,29],[1,8,24],[12,3,85],[4,3,60],[1,13,6],[1,5,58],[2,3,29],[14,5,67],[13,15,70],[5,14,94],[15,1,95],[3,1,17],[10,2,6],[11,10,44],[9,14,62],[4,11,32],[15,13,48],[2,10,77],[3,13,90],[5,7,68],[10,6,78],[3,6,95],[10,12,68],[13,6,73],[10,1,8],[10,7,18],[10,5,64],[5,1,55],[13,7,90],[1,9,67],[3,12,76],[14,10,22],[12,8,83],[4,7,76],[8,13,25],[5,6,57],[13,3,90],[6,2,96],[11,14,61],[12,1,94],[12,15,12],[4,8,88],[4,14,27],[7,4,25],[3,9,57],[2,15,90],[1,12,85],[12,11,44],[5,10,13],[5,12,96],[14,7,24],[14,12,98],[10,9,36],[15,6,17],[8,10,11],[2,13,5],[10,3,78],[6,13,11],[5,15,34],[12,10,12],[9,1,68],[10,13,1],[7,13,86],[1,7,62],[2,14,53],[8,14,75],[2,6,49],[10,15,83],[7,8,88],[6,1,87],[8,1,38],[8,11,73],[3,15,1],[3,8,93],[2,8,26],[4,5,26],[3,4,58],[7,1,55],[7,3,84],[5,8,97],[12,4,42],[6,3,71],[6,7,48],[15,12,3],[1,15,30],[10,8,11],[2,9,49],[6,14,95],[3,10,68],[6,4,14],[11,12,29],[1,10,93],[8,5,55],[12,2,86],[3,5,26],[15,9,12]]
,15,11));//38