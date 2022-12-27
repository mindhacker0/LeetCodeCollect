//2111. 使数组 K 递增的最少操作次数
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
*/
// var kIncreasing = function(arr, k) {//贪心(WA)
//     let count = 0;
//     for(let i=k;i<arr.length;i++){
//         if(arr[i-k]>arr[i]){
//             arr[i] = arr[i-k];
//             count++;
//         }
//     }
//     console.log(arr);
//     return count;
// };
var kIncreasing = function(arr, k) {//动态规划
    let group = new Array(k).fill(0).map(()=>new Array());
    let len = arr.length;
    for(let i=0;i<len;i++){
        group[i%k].push(arr[i]);
    }
    // function longestIncreaseSequence(list){//最长递增子序列(n方解法)
    //     let dp = [],maxLen = 0;//dp[i]表示以list[i]结尾的最长递增子数组
    //     for(let i=0;i<list.length;i++){
    //         dp[i] = 1;
    //         if(i!==0){
    //             for(let j=i-1;j>=0;j--){
    //                 if(list[i]>=list[j]) dp[i] = Math.max(dp[i],dp[j]+1);
    //             }
    //         }
    //         maxLen = Math.max(maxLen,dp[i]);
    //     }
    //     console.log(dp);
    //     return maxLen;
    // }
    function longestIncreaseSequence(list){//最长递增子序列(n*lgn解法)
        let end = [Infinity];//end[i]表示长为i的最长递增子序列最小的结束值
        let len = 0;
        for(let i=0;i<list.length;i++){
            if(list[i]>=end[len]){//大于可以拓展最长递增子序列长度
                len++; 
                end[len] = list[i];
            }else{//不能拓展，找到位置更新最小值
                let left = 0,right = len;
                while(left<=right){
                    let mid = (left+right)>>1;
                    if(end[mid]<=list[i]){
                        left = mid+1;
                    }else{
                        right = mid-1;
                    }
                }
                console.log(end[left],list[i])
                end[left] = list[i];
            }
        }
        console.log(len);
        return len+1;
    }
    let ans = 0;
    for(let i=0;i<k;i++){
       ans+=group[i].length - longestIncreaseSequence(group[i]);
    }
    console.log(group);
    return ans;
}
// console.log(kIncreasing([5,4,3,2,1],1));//4
// console.log(kIncreasing([4,1,5,2,6,2],3));//2
console.log(kIncreasing([12,6,12,6,14,2,13,17,3,8,11,7,4,11,18,8,8,3],1));//12
console.log(kIncreasing([2,2,2,2,2,1,1,4,4,3,3,3,3,3],1));//4