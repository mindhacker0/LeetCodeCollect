/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function recur(i,subArr){
        console.log(i);
        if(subArr.length === k){
            arr.push(subArr);
            return;
        }
        i++;
        if(i> n - (k - subArr.length) + 1) return;
        recur(i,subArr);//不选
        recur(i,[...subArr,i]);//选
    }
    recur(0,[]);
};
function reverse(){
    
}
console.log(permute([1,2,3]));