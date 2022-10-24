//940. 不同的子序列 II
/**
 * @param {string} s
 * @return {number}
*/
var distinctSubseqII = function(s) {
    let dp = new Array(s.length).fill(1);//dp[i]以s[i]结尾的子序列个数
    let cache = new Array(26).fill(-1);
    for(let i=0;i<s.length;i++){
        for(let j=0;j<26;j++){
            if(cache[j]!==-1) dp[i]=(dp[i]+dp[cache[j]])%(10e9+7);   
        }
        cache[s.charCodeAt(i)-97]=i;
    }
    console.log(dp);
    let ans  = 0;
    for(let i=0;i<26;i++)  if(cache[i]!==-1) ans+=dp[cache[i]];
    return ans;
};
console.log(distinctSubseqII("aas"));//5
console.log(distinctSubseqII("abc"));//7
console.log(distinctSubseqII("bab"));//6
console.log(distinctSubseqII("lee"));//5
console.log(distinctSubseqII("aaa"));//3
console.log(distinctSubseqII("leel"));//10
console.log(distinctSubseqII("bebb"));//9
console.log(distinctSubseqII("besb"));//14
console.log(distinctSubseqII("ceeee"));//9