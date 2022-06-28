/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/
var nextPermutation = function(nums) {
    let len = nums.length;
    let result = [],min=[];
    function permute(index,set,arr){
        if(index===len){
            console.log(arr);
            if(cmp(arr>nums)){

            }
            return;
        }
        for(let i=0;i<len;i++){
            if(set.has(i)) continue;
            set.add(i);
            arr.push(nums[i]);
            permute(index+1,set,arr);
            set.delete(i);
            arr.pop();
        }
    }
    function cmp(arr1,arr2,len){
        for(let i=0;i<len;i++){
            if(arr1[0]<arr2[0]) return false;
        }
    }
    permute(0,new Set,[]);
};
console.log(nextPermutation([1,2,3]));