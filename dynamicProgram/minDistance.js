//72. 编辑距离
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
*/
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    word1+=" ";
    word2+=" ";
    let dp = [];
    for(let i=0;i<=m;i++){
        dp[i] = [];
        dp[i][0] = i;
    }
    for(let i=0;i<=n;i++){
        dp[0][i] = i;
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = Math.min(dp[i-1][j-1],Math.min(dp[i-1][j],dp[i][j-1]))+1;
            }
        }
    }
    return dp[m][n];
};
console.log(minDistance("horse","ros"))