//139. 单词拆分
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
*/
var wordBreak = function(s, wordDict) {
    let len = s.length;
    let dp = new Array(len).fill(false);//dp[i]表示能拼凑成s[i]
    for(let i=0;i<s.length;i++){
        for(let j=0;j<wordDict.length;j++){
            if(i!==0&&dp[i-1]===false) continue;
            let k = 0,m=i;
            while(s[m]===wordDict[j][k]&&m<len){k++;m++}
            if(k===wordDict[j].length) dp[m-1] = 1;
        }
        console.log(dp);
    }
    return dp[len-1] === 1;
};
//console.log(wordBreak("leetcode",["leet", "code"]));
console.log(wordBreak("applepenapple",["apple", "pen"]))