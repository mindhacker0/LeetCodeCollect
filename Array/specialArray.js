/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length;
    let ans = -1;
    for(let i=0;i<len;i++){
        if(nums[i]>=len-i){
            console.log(i);
            let candidate = nums[i];
            while((i===0&&candidate>=len)||candidate>nums[i-1]){
                if(candidate === len-i){
                    ans = candidate;
                }
                candidate--;
            }
            break;
        }
    }
    return ans;
};
console.log(specialArray([3,6,7,7,0]));