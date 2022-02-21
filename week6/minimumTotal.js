//120. 三角形最小路径和
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle.length === 0) return 0;
    let dp = [[]];//dp[i][j]表示走到第i层j个的最短路径
    dp[0][0] = triangle[0][0];
    for(let i=1;i<triangle.length;i++){
        dp[i] = [];
        for(let j=0;j<triangle[i].length;j++){
            if(j==0){
                dp[i][j] = dp[i-1][j]+triangle[i][j];
            }else if(i-1>=j){
                dp[i][j] = Math.min(dp[i-1][j-1]+triangle[i][j],dp[i-1][j]+triangle[i][j]);
            }else{
                dp[i][j] = dp[i-1][j-1]+triangle[i][j];
            }
        }
        console.log(dp);
    }
    return Math.min.call(null,...dp[triangle.length-1]);
};
// console.log(minimumTotal([
//     [2],
//     [3,4],
//     [100,5,7]
// ]));
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));