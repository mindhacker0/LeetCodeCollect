//698. 划分为k个相等的子集
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
*/
var canPartitionKSubsets = function(nums, k) {//状态压缩+记忆化搜索
    let len = nums.length;
    let sum = 0,max = -1;
    for(let i=0;i<len;i++){
        sum+=nums[i];
        max = Math.max(max,nums[i]);
    }
    if((sum%k)!==0) return false;//不能被k整除无法分出来
    let per = sum/k;//每个背包大小
    if(max>per) return false;//有元素超过背包容量也没法分
    let visit = new Array(1<<len);//穷举可能的状态
    function trace(index,sum){
        if(typeof visit[index]!=="undefined") return visit[index];
        if(sum===per){sum=0;console.log(index);}
        if(sum>per) return false;
        if(index === (1<<len)-1){
            return sum===0;
        }
        for(let i=0;i<len;i++){
            if(index&(1<<i)) continue;
            visit[index^(1<<i)]=trace(index^(1<<i),sum+nums[i]);
            if(visit[index^(1<<i)]) return true;
        }
        return false;
    }
    return trace(0,0,[]);
};
// console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1],4));
// console.log(canPartitionKSubsets([1,1,1,1,2,2,2,2],4));
// console.log(canPartitionKSubsets([4,4,4,6,1,2,2,9,4,6],3));
// console.log(canPartitionKSubsets([18,20,39,73,96,99,101,111,114,190,207,295,471,649,700,1037],4))
console.log(canPartitionKSubsets([2,2,2,2,3,4,5],4))