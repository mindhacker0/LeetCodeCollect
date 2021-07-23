/**
 * @param {number[]} nums
 * @return {boolean}
*/
var isStraight = function(nums) {
    nums.sort((a,b)=>a-b);
    console.log(nums)
    let cat = 0;
    let begin = -1;
    let map = new Map();
    for(var i in nums){
        if(nums[i] === 0) cat++;
        else{
            if(map.get(nums[i])) return false;
            if(begin === -1) begin = nums[i];
            else{
                begin++;
                console.log(nums[i],begin);
                if(nums[i]!==begin){//不是顺序的牌
                    cat-=nums[i]-begin;
                    if(cat<0) return false;
                    begin+=nums[i]-begin;
                }
            }
            map.set(nums[i],true);
        }
    }
    return true;
};
console.log(isStraight([9,0,6,0,10]))