//剑指 Offer 53 - II. 0～n-1中缺失的数字
/**
 * @param {number[]} nums
 * @return {number}
*/
var missingNumber = function(nums) {
    if(nums.length === 1) return nums[0]===0?1:0;
    if(nums[0]!==0) return 0;
    let i = 0,j = nums.length-1;
    let sum = nums[i]+nums[j];
    while(i<j){
        if(nums[i]+nums[j]!==sum){
            return nums[i] === i?sum - nums[i]:sum-nums[j];
        }else{
            i++;
            j--;
        }
    }
    i--;j++;
    if(nums[j] - nums[i] >j-i){
        if(j-i === 2) return nums[i+1] === i+1?i+2:i+1;
        else return nums[i]+1;
    } 
    return sum+1;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {//哈希
    nums=JSON.parse(nums[0])
    let len=nums.length;
    let map={};
    for(let i=0;i<nums.length;i++){
        map[nums[i]]=true;
    }
    console.log(nums,map)
    for(var i=0;i<nums.length;i++){
        if(!map[i]){
            return i
        }
    }
    return i;
};
var missingNumber = function(nums) {//二分
    let l = 0,r = nums.length - 1;
    while(l<r){
        let mid = (l+r)>>1;
        if(nums[mid]<=mid){
            l = mid+1;
        }else{
            r = mid-1;
        }
        console.log(l,r);
    }
    console.log(l,r);
    if(l === nums[l]) l++;
    return l;
};
console.log(missingNumber([0,1,3]));
//console.log(missingNumber([0,1,2,3,4,5,6,7,9]));
//console.log(missingNumber([0,1,3,4,5,6,7,8,9]));
console.log(missingNumber([0,1,2]));
console.log(missingNumber([0]));