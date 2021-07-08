/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let len = nums.length;
    for(let i = 0;i< len;i++){
        console.log(i,nums[i]);
        if(nums[i] === val){
            nums.splice(i,1);
            i--;len--;
        }
    }
    return len;
};
console.log(removeElement([3,3,1,3],3))