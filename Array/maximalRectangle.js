//85. 最大矩形
/**
 * @param {character[][]} matrix
 * @return {number}
*/
var maximalRectangle = function(matrix) {//单调栈
    let m = matrix.length,n= matrix[0].length;
    let horizon = [];
    for(let i=0;i<m;i++){
        horizon[i] = [];
        for(let j=0;j<n;j++){
            horizon[i][j] = i==0?Number(matrix[i][j]):matrix[i][j]==0?0:(horizon[i-1][j]*1+matrix[i][j]*1);
        }
    }
    let stack = [];
    let ans = 0;
    for(let i=0;i<m;i++){
        stack = [-1];
        horizon[i].push(0);
        for(let j=0;j<n+1;j++){
            while(stack.length>1 && horizon[i][stack[stack.length-1]] > horizon[i][j]){
                let index = stack.pop();
                ans = Math.max(ans,(j - stack[stack.length-1]-1)*horizon[i][index]);
            }
            stack.push(j);
        }
    }
    console.log(horizon);
    return ans;
};
console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]));