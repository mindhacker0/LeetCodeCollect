/**
 * @param {number[]} nums
 * @return {number[][]}
*/
var threeSum = function(nums) {
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
// console.log(threeSum([1,2,-2,-1]));
// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
console.log(threeSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));