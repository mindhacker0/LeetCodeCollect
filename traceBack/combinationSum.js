//39. 组合总和
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
*/
var combinationSum = function(candidates, target) {//所给数组为正数，可以剪枝
    let len = candidates.length;
    let ans = [];
    function dfs(sum,arr){
        if(sum === target){
            //console.log(arr);
            ans.push(arr.slice())
        }
        if(sum>=target) return;
        for(let i=0;i<len;i++){
            if(arr.length && candidates[i]<arr[arr.length-1]) continue;//根据大小去重，保证所得数组不严格递增
            arr.push(candidates[i]);
            sum+=candidates[i];
            dfs(sum,arr);
            sum-=candidates[i];
            arr.pop();
        }
    }
    dfs(0,[]);
    return ans;
};
console.log(combinationSum([2,3,6,7],7))