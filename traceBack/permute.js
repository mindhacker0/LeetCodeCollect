//46. 全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
   let len = nums.length;
   let ans = [];
   function trace(index,arr,chosen){
        if(index === len){
            ans.push([].concat(arr));
        }
        for(let i=0;i<len;i++){
            if(chosen.has(i)) continue;
            arr.push(nums[i]);
            chosen.add(i);
            trace(index+1,arr,chosen);
            chosen.delete(i);
            arr.pop();
        }
   }
   trace(0,[],new Set);
   return ans;
};
console.log(permute([1,1,2]))