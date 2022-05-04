//97. 交错字符串
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
*/
var isInterleave = function(s1, s2, s3) {//回溯(正确但超时)
    let m = s1.length,n = s2.length;
    if(m+n!==s3.length) return false;
    let canmatch = false;
    function dfs(left,right,match){//left表示第一个字符串匹配的位置，right表示第二个
        if(match === s3.length){
            //console.log('match',left,right);
            if(left === m && right===n) canmatch = true;
            return;
        }
        if(s1[left]!==s2[right]){//走哪一边很明确
            if(s3[match] === s1[left]){left++;match++;}
            else if(s3[match] === s2[right]){right++;match++;}
            else return;//匹配失败
            dfs(left,right,match);
        }else{//两边都可以走，需要回溯
            if(s3[match]!==s1[left]) return;//匹配失败
            else{
                left++;match++;
                dfs(left,right,match);
                match--;left--;
                right++;match++;
                dfs(left,right,match);
                match--;right--;
            }
        }
    }
    dfs(0,0,0);
    return canmatch;
};
var isInterleave = function(s1, s2, s3) {//动态规划
    let m = s1.length,n = s2.length;
    if(m+n!==s3.length) return false;
    let dp = [];//dp[i][j] 表示s1前i个和s2前j个是否可以组合s3 [i+j-1]
    for(let i=0;i<=m;i++){
        dp[i] = [];
        for(let j=0;j<=n;j++){
            if(i===0&&j==0) dp[i][j] = 1;
            else{
                if(j>0) dp[i][j] |= dp[i][j-1] && (s2[j-1] === s3[i+j-1]);
                if(i>0) dp[i][j] |= dp[i-1][j] && (s1[i-1] === s3[i+j-1]);
            }
        }
    }
    console.log(dp);
    return dp[m][n]==1
}

// console.log(isInterleave("aabcc","dbbca","aadbbcbcac"));
// console.log(isInterleave("bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa",
// "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab",
// "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"));
console.log(isInterleave("","",""));
console.log(isInterleave("aabc","abad","aabadabc"));
console.log(isInterleave("a","b","a"));