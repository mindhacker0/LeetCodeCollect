//410. 分割数组的最大值
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
*/
var splitArray = function(nums, m) {//二分，估计不同大小的容器能否放下
    let capactiy = 0;
    let len = nums.length;
    let max = -10e7;
    for(let i=0;i<len;i++){
        capactiy+=nums[i];
        max = Math.max(max,nums[i]);//计算元素的最大值，容器不能小于该值。
    }
    let left = max,right = capactiy;//容器的区间在[max(nums),sum(nums)]之间
    console.log(left,right);
    while(left<right){
        let mid = (left+right)>>1;
        let sum=0,count = 0;//count所需要的容器数量
        for(let i=0;i<len;i++){
            sum+=nums[i];
            if(sum>=mid){
                count++;
                if(sum!==mid) sum=nums[i];
                else sum=0;
            }
        }
        if(sum!==0) count++;
        console.log(`容器大小为${mid},需要${count}个`,left,right);
        if(count>m){
            left = mid+1;//为啥left要加1,right不减1？因为(left+right)>>1取值取不到right，所以right不能跳过
        }else{
            right = mid;
        }
    }
    return [left,right]
};
var splitArray = function(nums, m) {//动态规划
    let dp = [];//dp[i][j]表示前i个分割为j段所需要的容器大小
    let len = nums.length;
    let pre = [nums[0]];
    for(let i=1;i<len;i++){
        pre[i]+=nums[i];
    }
    dp[0] = [0];
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            
            for(let k=0;k<m;k++){//容器个数

            }
        }
    }
}
console.log(splitArray([7,2,5,10,8],2));
console.log(splitArray([1,4,4],3));