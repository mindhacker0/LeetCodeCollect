//801. 使序列递增的最小交换次数
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var minSwap = function(nums1, nums2) {
    let dp = [];//dp[i][j]表示第i个交换和不交换的最小次数
    let len = nums1.length;
    dp[0][0] = 0,dp[0][1] = 1;
    for(let i=1;i<len;i++){
        if(nums1[i]<nums1[i-1]){
            
        }
    }
};
console.log(minSwap([1,3,5,4],[1,2,3,7]));