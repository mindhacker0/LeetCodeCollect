//1248. 统计「优美子数组」
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  var numberOfSubarrays = function(nums, k) {//暴力朴素(超时)
//     let len = nums.length;
//     let ans = 0;
//     for(let i=0;i<len;i++){
//         let count = 0
//         for(let j=i;j<len;j++){
//             if(nums[j]%2 === 1) count++;
//             if(count === k) ans++;
//         }
//     }
//     return ans;
// }
var numberOfSubarrays = function(nums, k) {//前缀和做法
    let preSum = [];
    let len = nums.length;
    preSum[0] = 0;
    for(let i=1;i<=len;i++) preSum[i] = preSum[i-1] + nums[i-1]%2;
    //console.log(preSum);
    let map = new Array(len+1).fill(0);
    let ans = 0;
    for(let i=0;i<=len;i++){
        if(map[preSum[i]-k]) ans+=map[preSum[i]-k];
        if(typeof map[preSum[i]] === "undefined") map[preSum[i]] = 0;
        map[preSum[i]]++;
    }
    return ans;
};
console.log(numberOfSubarrays([1,1,2,1,1],3))
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2))