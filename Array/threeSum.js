/**
 * @param {number[]} nums
 * @return {number[][]}
*/
var threeSum = function(nums) {//配合两数之和
    if(nums.length<3) return [];
    function twoSum(nums, target){//返回下标
        let map = {};
        let arr = [];
        for(let i = 0;i<nums.length;i++){
            if(typeof map[nums[i]]!=="undefined") arr.push([i,map[nums[i]]]);
            map[target-nums[i]] = i;
        }
        return arr;
    };
    let result = [];
    for(let i = 0;i<nums.length;i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let twoArr = twoSum(nums,0 - nums[i]);
        for(var item of twoArr){
            if(item && (!~item.indexOf(i))){
                let key = [nums[item[0]],nums[item[1]],nums[i]].sort().join(",");
                //console.log(key);
                if(!~result.indexOf(key)) result.push(key);
            }
        }
    }
    return result.map((item)=>item.split(","));
};
var threeSum = function(nums) {//排序+双指针
    nums.sort((a,b)=>a-b);
    let ans = [];
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>0) continue;
        if(i>0 && nums[i-1] === nums[i]) continue;
        let left = i+1,right = nums.length-1;
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right];
            if(sum>0) right--;
            else if(sum<0) left++;
            else{
                console.log(i,left,right)
                let arr = [nums[i],nums[left],nums[right]];
                ans.push(arr);
                while(left<right && nums[right-1] === nums[right]) right--;
                while(left<right && nums[left] === nums[left+1]) left++;
                right--;left++;
            } 
        }
    }
    return ans;
}
console.log(threeSum([-2,0,0,2,2])); 
// console.log(threeSum([1,2,-2,-1]));
//console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
// console.log(threeSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));