//77. 组合
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
*/
var combine = function(n, k) {
    let arr = [];
    if (k <= 0 || n < k) {
        return [];
    }
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
    return arr;
};
console.log(combine(4,2));