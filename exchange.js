/**
* @param {number[]} nums
* @return {number[]}
*/
// var exchange = function(nums) {
//     while(true){
//         let hasChange = false;
//         for(let i = 1;i<nums.length;i++){
//             if(nums[i-1]%2===0 && nums[i]%2!==0){
//                 nums[i]^=nums[i-1];
//                 nums[i-1]^=nums[i];
//                 nums[i]^=nums[i-1];
//                 hasChange = true;
//             }
//         }
//         console.log(nums);
//         if(hasChange === false) break;
//     }
//     return nums;
// };
var exchange = function(nums) {
    let oddList = [];
    let evenList =[];
    for(var i of nums){
        if(i%2===0){
            evenList.push(i);
        }else{
            oddList.push(i);
        }
    }
    return oddList.concat(evenList);
}
console.log(exchange([2,16,3,5,13,1,16,1,12,18,11,8,11,11,5,1]))