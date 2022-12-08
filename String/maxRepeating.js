//1668. 最大重复子字符串
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
*/
var maxRepeating = function(sequence, word) {//kmp
    let nLen = word.length;
    // 构造next
    let next = new Array(nLen).fill(0);
    for(let i=0,j=1;j<nLen;j++){
        while(i>0&&word[i]!==word[j]) i = next[i-1];
        if(word[i]===word[j]){
            i++;
        }
        next[j] = i;
    }
    console.log(next);
    //匹配过程
    let ans = 0,dp = new Array(sequence.length).fill(0);//dp表示以i结尾的最长重复子序列
    for(let i=0,j=0;i<sequence.length;i++){
        while(j>0&&sequence[i]!==word[j]){ j=next[j-1];}
        if(sequence[i] === word[j]){
            j++;
        }
        if(j===nLen){
            console.log("find",i);
            dp[i] = i<nLen?1:dp[i-nLen]+1;
            ans = Math.max(ans,dp[i]);
        }
    }
    console.log(dp);
    return ans;
};
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba","aaaba"));//5
console.log(maxRepeating("aaaaaa","aa"));