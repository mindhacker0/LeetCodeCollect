//59. 螺旋矩阵 II
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
   let result = new Array(n).fill(0).map(()=>new Array(n).fill(0));
   const dir = [[0,1],[1,0],[0,-1],[-1,0]];
   let mode = 0,now = [0,-1],index = 0;
   while(index<=n*n){
      const [dx,dy] = dir[mode];
      now[0]+=dx;
      now[1]+=dy;
      index++;
      if(result[now[0]][now[1]] === 0) result[now[0]][now[1]] = index;
      if(mode === 0 && (now[1]+1>=n || result[now[0]][now[1]+1]!==0)) mode++;
      if(mode === 1 && (now[0]+1>=n || result[now[0]+1][now[1]]!==0)) mode++;
      if(mode === 2 && (now[1]-1<0 || result[now[0]][now[1]-1]!==0)) mode++;
      if(mode === 3 && (now[0]-1<0 || result[now[0]-1][now[1]]!==0)) mode++;
      mode%=4;
   }
   return result;
};
console.log(generateMatrix(3));
console.log(generateMatrix(5));