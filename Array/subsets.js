//78. 子集
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let arr = [];
    function recur(i,subArr){
        if(i === nums.length-1){
            console.log(subArr);
            arr.push(subArr);
            return;
        }
        i++;
        recur(i,subArr);//不选
        recur(i,[...subArr,nums[i]]);//选
    }
    recur(-1,[]);
    return arr;
};
console.log(subsets([1,2,3]));