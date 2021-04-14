/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low = 0,high = nums.length-1;
    while(low<high || low-high !== 1){
        let middle = Math.ceil((low + high)/2);
        if(target === nums[middle]){
            return middle;
        }
        else if(target < nums[middle]){
            high = middle - 1;
        }
        else if(target > nums[middle]){
            low = middle + 1;
        }
    }
    console.log(low,high);
    return low;
};
console.log(searchInsert([1,3,5,6],2));