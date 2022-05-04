//40. 组合总和 II
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    let len = candidates.length;
    let set = new Set;
    let map = new Map;
    let ans = [];
    function trace(index,sum,arr){
        if(map.get(arr.join(","))) return;
        if(sum === target){
            console.log(arr);
            ans.push(arr.slice());
        }
        map.set(arr.join(","),true);
        if(index === len||sum>=target) return;
        for(let i=0;i<len;i++){
            if(arr.length && candidates[i]<arr[arr.length-1]) continue;
            if(set.has(i)) continue;
            set.add(i);
            arr.push(candidates[i]);
            sum+=candidates[i];
            trace(index+1,sum,arr);
            set.delete(i);
            arr.pop();
            sum-=candidates[i];
        }
    }
    trace(0,0,[]);
    return ans;
};
//console.log(combinationSum2([10,1,2,7,6,1,5],8))
console.log(combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],27))