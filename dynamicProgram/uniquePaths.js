//62.不同路径
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
*/
var uniquePaths = function(m, n) {//dfs超时
    let times = 0;
    function dfs(x,y,map){
        if(map[`${x},${y}`]||x>m||y>n) return;
        if(x==m-1 && y==n-1){
            console.log(map);
            times++;
        }
        map[`${x},${y}`] = true;
        dfs(x+1,y,map);
        dfs(x,y+1,map);
        map[`${x},${y}`] = false;
    }
    dfs(0,0,{});
    return times;   
};
var uniquePaths = function(m, n) {//动态规划
    let dp = [];//dp[i][j]表示到i,j路径数
    for(let i=0;i<m;i++){
        dp[i] = [];
        for(let j=0;j<n;j++){
            if(j===0||i==0){
                dp[i][j] = 1;
            }else{
                dp[i][j] = dp[i-1][j]+dp[i][j-1];
            }
        }
    }
    console.log(dp)
    return dp[m-1][n-1];   
};
console.log(uniquePaths(3,7))