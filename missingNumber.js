/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
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
console.log(missingNumber(process.argv.slice(2)))