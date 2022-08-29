//658. 找到 K 个最接近的元素
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
*/
var findClosestElements = function(arr, k, x) {
    let len = arr.length;
    let left = 0,right = len-1;
    while(left<right){
        let mid = (left+right)>>1;
        if(x<arr[mid]){
            right = mid;
        }else if(x>arr[mid]){
            left = mid+1;
        }else{
            left=right=mid;
            break;
        }
    }
    console.log(left,right);
    left--;
    let result = [];
    while(right-left<=k){
        if((left>=0 && Math.abs(arr[left]-x)<=Math.abs(arr[right]-x)) || right>(len-1)){
            result.unshift(arr[left]);
            left--;
        }else{
            result.push(arr[right]);
            right++;
        }
        console.log(result);
    }
    return result;
};
var findClosestElements = function(arr, k, x) {
    var n = arr.length;
    var l = 0, r = n - k;
    console.log(l,r);
    while(l < r) {
        var mid = l + r >> 1;
        if (x - arr[mid] > arr[mid + k] - x) l = mid + 1;
        else r = mid;
        console.log(l,r);
    }
    return arr.slice(l, l + k)
};
// console.log(findClosestElements([1,2,3,4,5],4,3));
// console.log(findClosestElements([1,4,7,9,16,18],4,8));
console.log(findClosestElements([0,0,1,2,3,3,4,7,7,8],3,5));