//891. 子序列宽度之和
/**
 * @param {number[]} nums
 * @return {number}
*/
var sumSubseqWidths = function(nums) {//每个数字对最终答案的贡献
    let total = 0,len = nums.length;
    let mod = 1000000009;
    nums.sort((a,b)=>a-b);
    let pwMap = new Array(len+1).fill(1);
    //预先求出幂
    for(let i=1;i<len;i++) pwMap[i] = (pwMap[i-1]*2)%mod;
    for(let i=0;i<len;i++){
        total+=(nums[i]*pwMap[i])%mod;
        total%=mod;
        total-=(nums[i]*pwMap[len-i-1])%mod;
        total%=mod;
    }
    return total;
};
console.log(sumSubseqWidths([1,2,3,4,5,6]))