//47. 全排列 II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let len = nums.length;
    let ans = [];
    let map = new Map;
    function trace(index,arr,chosen){
         if(index === len){
            if(map.get(arr.join(","))) return;
            ans.push([].concat(arr));
            map.set(arr.join(","),true);
            return;
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
 console.log(permuteUnique([1,1,2]))