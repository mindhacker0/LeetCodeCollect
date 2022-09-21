//646. 最长数对链
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {//贪心
    pairs.sort((a,b)=>a[1]-b[1]);
    //console.log(pairs);
    let end = -Infinity,count = 0;
    for(let i=0;i<pairs.length;i++){
        if(pairs[i][0]>end){
            count++;
            end = pairs[i][1];
        }
    }
    return count;
};
var findLongestChain = function(pairs){//动态规划
    pairs.sort((a,b)=>a[0]-b[0]);
    let len = pairs.length;
    let dp = new Array(len).fill(1);//dp[i]表示以pairs[i]结尾的最大长度的链
    for(let i=0;i<len;i++){
        let [x,y] = pairs[i];
        for(let j=0;j<i;j++){
            if(pairs[j][1]<x){
                dp[i] = Math.max(dp[j]+1,dp[i]);
            }
        }
    }
    //console.log(dp);
    return dp[len-1];
}
console.log(findLongestChain([[1,2], [2,3], [3,4],[-2,-1]]));