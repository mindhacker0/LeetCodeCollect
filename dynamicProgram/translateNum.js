//剑指 Offer 46. 把数字翻译成字符串
/**
 * @param {number} num
 * @return {number}
*/
var translateNum = function(num) {
    if(num === 0) return 1;
    let dp = [];//以第i位数字结尾的能组成的可能数
    let counArr = [];
    while(num>0){
        let count = num%10;
        num = ~~(num/10);
        counArr.unshift(count);
    }
    console.log(counArr);
    let len = counArr.length;
    for(let i=0;i<len;i++){
        if(i===0){
            dp[i] = 1;
        }else{
            dp[i] = dp[i-1];
            if((counArr[i-1]*10+counArr[i])<26&&(counArr[i-1]*10+counArr[i])>=10){
                dp[i] += i<2?1:dp[i-2];
            } 
        }
    }
    return dp[len-1];
};
//console.log(translateNum(12258));//bcc lc bv
console.log(translateNum(0));