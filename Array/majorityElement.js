/**
 * @param {number[]} nums
 * @return {number}
*/
var majorityElement = function(nums) {
    let map = {};
    for(let s of nums){
        map[s] = (map[s]||0)+1;
        //console.log(map[s],Math.floor(nums.length/2));
        if(map[s] > Math.floor(nums.length/2)) return s;
    }
    return map;
};
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));