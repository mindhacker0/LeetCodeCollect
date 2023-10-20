//329. 矩阵中的最长递增路径
/**
 * @param {number[][]} matrix
 * @return {number}
*/
var longestIncreasingPath = function(matrix) {//记忆化搜索
    let m = matrix.length,n = matrix[0].length;
    let dir = [[-1,0],[1,0],[0,-1],[0,1]];
    let ansMap = {};
    function search(x,y,ansMap){//dfs深搜
      if(ansMap[`${x}-${y}`]) return ansMap[`${x}-${y}`];
      if(typeof ansMap[`${x}-${y}`] === "undefined") ansMap[`${x}-${y}`] = 1;//初始化为1，就是本身
      for(let i=0;i<4;i++){
        let [x1,y1] = dir[i];
        x1+=x,y1+=y;
        if(x1>=0&&x1<m&&y1>=0&&y1<n && matrix[x1][y1]>matrix[x][y]){
          ansMap[`${x}-${y}`] = Math.max(ansMap[`${x}-${y}`],search(x1,y1,ansMap)+1);
        }
      }
      console.log(x,y,ansMap[`${x}-${y}`]);
      return ansMap[`${x}-${y}`];
    }
    let ans = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            ans = Math.max(ans,search(i,j,ansMap));
        }
    }
    console.log(ansMap);
    return ans;
};
class Graph{
  constructor(val,index){
    this.val  = val;
    this.index = index;
    this.in = new Set;
    this.out = new Set;
  }
}
var longestIncreasingPath = function(matrix) {//有向图 拓扑排序
  let m = matrix.length,n = matrix[0].length;
  let dir = [[-1,0],[1,0],[0,-1],[0,1]];
  const map = [];
  const entry = [];//图的根节点
  //建图
  for(let i=0;i<m;++i){
    for(let j=0;j<n;++j){
      let g = new Graph(matrix[i][j],i*n+j);
      for(let k=0;k<dir.length;++k){
        let dx = i+dir[k][0],dy = j+dir[k][1];
        if(dx<0||dx>=m||dy<0||dy>=n) continue;
        if(matrix[dx][dy]>matrix[i][j]){
          g.out.add(dx*n+dy);
        }
        if(matrix[dx][dy]<matrix[i][j]){
          g.in.add(dx*n+dy);
        } 
      }
      map.push(g);
      if(g.in.size === 0) entry.push([g,1]);
    }
  }
  let max = 0;
  // 拓扑排序
  while(entry.length){
    let [node,dep] = entry.shift();
    max = Math.max(max,dep);
    node.out.forEach((val)=>{
      map[val].in.delete(node.index);
      if(map[val].in.size === 0) entry.push([map[val],dep+1]);
    })
    map[node.index] = null;
  }
  return max;
};
console.log(longestIncreasingPath([
    [9,9,4],
    [6,6,8],
    [2,1,1]
]));//4
// console.log(longestIncreasingPath([
//     [7,6,1,1],
//     [2,7,6,0],
//     [1,3,5,1],
//     [6,6,3,2]
// ]));//7
console.log(longestIncreasingPath([
    [0,1,2,3,4,5,6,7,8,9],
    [19,18,17,16,15,14,13,12,11,10],
    [20,21,22,23,24,25,26,27,28,29],
    [39,38,37,36,35,34,33,32,31,30],
    [40,41,42,43,44,45,46,47,48,49],
    [59,58,57,56,55,54,53,52,51,50],
    [60,61,62,63,64,65,66,67,68,69],
    [79,78,77,76,75,74,73,72,71,70],
    [80,81,82,83,84,85,86,87,88,89],
    [99,98,97,96,95,94,93,92,91,90],
    [100,101,102,103,104,105,106,107,108,109],
    [119,118,117,116,115,114,113,112,111,110],
    [120,121,122,123,124,125,126,127,128,129],
    [139,138,137,136,135,134,133,132,131,130],
    [0,0,0,0,0,0,0,0,0,0]
]));
