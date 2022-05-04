//91. 解码方法
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = new Array(s.length+1).fill(0);//dp i 表示到第i位为止可以翻译的次数
    dp[0] = s[0] === '0'?0:1;
    for(let i=1;i<=s.length;i++){
        let num = (Number(s[i-2])*10+Number(s[i-1]));
        if(i>1 && num<=26 && s[i-2]!=='0'){
            dp[i] += (dp[i-2]||0);
        }
        if(s[i-1] !== '0'){
            dp[i] += dp[i-1];
        }
        // if(num<=26 && num>=10 && s[i] !== '0'){
        //     dp[i] = dp[i-2]+2;
        // }else if(s[i-1] === '0'){
        //     dp[i] = dp[i-1]-1;
        // }else{
        //     dp[i] = dp[i-1];
        // }
    }
    console.log(dp)
    return dp[s.length];
};
console.log(numDecodings("12"));//2
console.log(numDecodings("226"));//3
console.log(numDecodings("0"));//0
console.log(numDecodings("10"));//1
console.log(numDecodings("2101"));//1
console.log(numDecodings("06"));//0
console.log(numDecodings("1123"));//5
// 1 1 2 3
// 1 1 23
// 11 2 3
// 11 23
// 1 12 3
