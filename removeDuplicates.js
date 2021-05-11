/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function(nums) {
    let prev;
    for(let i=0;i<nums.length;){
        if(prev === nums[i]){
            nums.splice(i,1);
        }else{
            prev = nums[i];
            i++;
        }
    }
    return nums.length;
};
console.log(removeDuplicates([1,2]))