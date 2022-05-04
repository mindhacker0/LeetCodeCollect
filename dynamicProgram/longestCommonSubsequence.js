//剑指 Offer II 095. 最长公共子序列
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp=[[0]];//dp[i][j]表示字符串1[0,i]和字符串2[0,j]的公共串
    let m = text1.length,n = text2.length;
    for(let i=1;i<=m;i++){
        dp[i] = [0];
        for(let j=1;j<=n;j++){
            if(text1[i-1] === text2[j-1]){
                dp[i][j] = (dp[i-1][j-1]||0)+1;
            }else{
                dp[i][j] = Math.max((dp[i-1][j]||0),(dp[i][j-1]||0))
            }
        }
    }
    console.log(dp);
    return dp[m][n];
};
// console.log(longestCommonSubsequence("abcde","ace"));//ace
// console.log(longestCommonSubsequence("aaac","aaba"));//aaa
console.log(longestCommonSubsequence("aaacb","aaba"));//aaa
// console.log(longestCommonSubsequence("oxcpqrsvwf","shmtulqrypy"));