/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map ={},maxLen = 0,maxNum = -1,max;
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = [];
        }
        map[nums[i]].push(i);
        if(map[nums[i]].length > maxLen){//更新度最大的那个
            maxLen = map[nums[i]].length;
            maxNum = nums[i];
        }else if(map[nums[i]].length === maxLen){//相等的度取路径小的
            let stage = map[maxNum][map[maxNum].length-1] - map[maxNum][0]+1;
            let stage1 = map[nums[i]][map[nums[i]].length-1] - map[nums[i]][0]+1;
            if(stage1<stage){
                maxNum = nums[i];
            }
        }    
    }
    console.log(map,maxNum);
    return map[maxNum][map[maxNum].length-1] - map[maxNum][0]+1;//返回路径最小的度
};
console.log(findShortestSubArray([2,1,1,2,1,3,3,3,1,3,1,3,2]));