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
//583. 两个字符串的删除操作
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
*/
var minDistance = function(word1, word2) {
    let dp = [];//dp[i][j]表示使得word1[i]和word2[j]相同的最少操作次数
    let len1 = word1.length,len2 = word2.length;
    for(let i=0;i<len1;i++){
        dp[i] = [];
        for(let j=0;j<len2;j++){
            if(i===0){
                if(word1[i]===word2[j]) dp[i][j] = j===0?0:j;
                else dp[i][j] = j===0?2:dp[i][j-1]+1;
                continue;
            }
            if(j===0){
                if(word1[i]===word2[j]) dp[i][j] = i===0?0:i;
                else dp[i][j] = i===0?2:dp[i-1][j]+1;
                continue;
            }
            let min = Math.min(dp[i-1][j],dp[i][j-1]);
            if(word1[i]===word2[j]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = min+1;
        }
    }
    console.log(dp);
    return dp[len1-1][len2-1];
};
//console.log(minDistance("horse","ros"));1
// console.log(minDistance("sea","eat"))
console.log(minDistance("leetcode","etco"))