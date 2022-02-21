//1248. 统计「优美子数组」
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let prefixArr = [];
    if(!nums.length) return 0;
    prefixArr[0] = nums[0]%2;
    for(let i=1;i<nums.length;i++){//计算前缀数组
        prefixArr[i] = prefixArr[i-1]+(nums[i]%2);
    }
    let map = {};
    let sum = 0;
    for(let i=0;i<prefixArr.length;i++){
        if(map[prefixArr[i]-k]){sum+=map[prefixArr[i]-k];}
        if(!map[prefixArr[i]]){
            map[prefixArr[i]] = 0;
        }
        map[prefixArr[i]]++;
    }
    console.log(sum);
};
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2))