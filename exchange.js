//剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
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
var exchange = function(nums) {//双端队列（20.48%）
    let  arr = [];
    for(let i of nums){
        i%2?arr.unshift(i):arr.push(i);
    }
    return arr;
};
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var exchange = function(nums) {//双指针
    let len = nums.length;
    let left = 0,right = len-1;
    while(left<right){
        while(left<right && nums[left]%2) left++;;
        while(left<right && nums[right]%2===0) right--;
        swap(nums,left,right);
    }
    return nums;
};
console.log(exchange([2,16,3,5,13,1,16,1,12,18,11,8,11,11,5,1]))