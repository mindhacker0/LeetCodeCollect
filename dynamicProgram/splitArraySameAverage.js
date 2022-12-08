//805. 数组的均值分割
/**
 * @param {number[]} nums
 * @return {boolean}
*/
var splitArraySameAverage = function(nums) {//状态压缩，暴力
    let total = 0,len = nums.length;
    for(let i=0;i<len;i++) total+=nums[i];
    for(let i=1;i<=2**len;i++){
        let sum = 0,count = 0;
        for(let j=0;j<len;j++){
            if((i>>j)&1){sum+=nums[j];count++;}
        }
        if(sum/count === (total-sum)/(len -count)) return true;
    }
    return false;
};
var splitArraySameAverage = function(nums) {//折半搜索
    let len = nums.length;
    if(len===1) return false;
    let mid = len>>1;
    let sum = 0;
    for(let i=0;i<len;i++) sum+=nums[i];
    for(let i=0;i<len;i++) nums[i] = nums[i]*len - sum;
    console.log(sum,nums);
    let left = new Set;
    for(let i=1;i<(1<<mid);i++){
        let total = 0;
        for(let j=0;j<mid;j++){
            if(1&(i>>j)) total+=nums[j];
        }
        if(total===0) return true;
        left.add(total);
    }
    console.log(left);
    let rightSum = 0;
    for(let j=mid;j<len;j++) rightSum+=nums[j];//计算右边之和，不能同时取左边和右边的全部。
    for(let i=1;i<(1<<len-mid);i++){
        let total = 0;
        for(let j=mid;j<len;j++){
            if(1&(i>>(j-mid))) total+=nums[j];
        }
        console.log(total)
        if(total===0||(left.has(-total) && rightSum!==total)) return true;
    }
    return false;
}
//背包
// console.log(splitArraySameAverage([1,2,3,4,5,6,7,8]));
console.log(splitArraySameAverage([3,1,2]));
// console.log(splitArraySameAverage([8,8,8,8,16,16,16,16]));
// console.log(splitArraySameAverage([60,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]));