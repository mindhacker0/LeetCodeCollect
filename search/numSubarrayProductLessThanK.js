
//713. 乘积小于 K 的子数组
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var numSubarrayProductLessThanK = function(nums, k) {//暴力搜索，超时
    let len = nums.length;
    let ans = 0;
    function subArr(index,muti,arr,prev){
        if(muti>=k) return;
        if(index === len){
            console.log(arr,muti);
            if(prev!==-1) ans++;
            return;
        }
        subArr(index+1,muti,arr,prev);
        if(prev>=0 && prev!==index-1) return;
        muti*=nums[index];
        arr.push(nums[index]);
        subArr(index+1,muti,arr,index);
        arr.pop();
    }
    subArr(0,1,[],-1);
    return ans;
};
var numSubarrayProductLessThanK = function(nums, k) {//               
    let len = nums.length;
    let ans = 0;
    let left = 0,right = 0;
    let muti = 1;
    while(right<len&&left<len)
        if(muti*nums[right]<k&&right<len){
            ans++;
            right++;
        }else{
            left++;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
}
console.log(numSubarrayProductLessThanK([10,5,2,6],100))