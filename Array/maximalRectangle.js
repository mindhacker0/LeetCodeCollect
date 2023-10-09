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
var maximalRectangle = function(matrix) {//暴力
    let m = matrix.length,n = matrix[0].length;
    let ans = 0;
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(matrix[i][j]==='0') continue;
            for(let x=i;x<m;++x){
                for(let y=j;y<n;++y){
                    if(matrix[x][y]==='0') continue;
                    let res = maxRect([i,j],[x,y]);
                    ans = Math.max(ans,res);
                    if(res === 0) break;
                }
            }
        }
    }
    function maxRect(start,end){//以start为左上角的最大矩形
        console.log(start,end)
        let [x,y] = start,[x1,y1] = end;
        for(let i=x;i<=x1;++i){
            for(let j=y;j<=y1;++j){
                if(matrix[i][j]==='0') return 0;
            }
        }
        return (x1-x+1)*(y1-y+1);
    }
    return ans;
}
var maximalRectangle = function(matrix) {//动态规划
    let m = matrix.length,n = matrix[0].length;
    let ans = 0;
    let dp = new Array(m).fill(0).map(()=>new Array(n).fill([0,0]));
    for(let i=m-1;i>=0;--i){
        for(let j=n-1;j>=0;--j){
            if(i === m-1 && j === n-1) dp[i][j] = matrix[i][j] === '0'?[0,0]:[1,1];
            else{
                if(i === m-1) dp[i][j] = matrix[i][j] === '0'?[0,0]:[dp[i][j+1][0]+1,dp[i][j+1][1]||1];
                else if(j === n-1) dp[i][j] = matrix[i][j] === '0'?[0,0]:[dp[i+1][j][0]||1,dp[i+1][j][1]+1];
                else{
                    if(matrix[i][j] === '0') dp[i][j] = [0,0];
                    else{
                        let [w,h,wx,hx] = dp[i][j+1],[w1,h1,wx1,hx1] = dp[i+1][j];
                        if(h==1||w1===1){
                            dp[i][j] = (w*h>w1*h1||w1==0)?[w+1,h]:w*h===w1*h1?[w+1,h,w1,h1+1]:[w1,h1+1];
                        }else if(h===0||w1===0){
                            dp[i][j] = (w*h>w1*h1||w1==0)?[w,h]:[w1,h1];
                        }
                    }
                }
            }
        }
    }
    console.log(dp)
    return ans;
}
console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]));