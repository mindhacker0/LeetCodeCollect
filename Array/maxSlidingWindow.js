//239. 滑动窗口最大值
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
*/
// var maxSlidingWindow = function(nums, k) {
//     let arr = [0];
//     let result = [];
//     for(let i=0;i<nums.length;i++){
//         while(arr[0]<=i-k) arr.shift();//不在窗口里面
//         if(nums[i]>=nums[arr[0]]){//新进的数大于队头
//             while(arr.length) arr.pop();
//             arr.push(i);
//         }else{
//             while(nums[arr[arr.length-1]]<nums[i]) arr.pop();
//             arr.push(i);
//         }
//         console.log(nums[arr[0]]);
//         if(i>=k-1){
//             result.push(nums[arr[0]]);
//         }
//     }
//     return result;
// };
var maxSlidingWindow = function(nums, k) {//分为k组，前后缀最大值
    let n = nums.length, p = new Int16Array(n), s = new Int16Array(n), r = new Int16Array(n - k + 1), i = n, j = -1
    while (i--) {
        p[++j] = j % k ? Math.max(p[j - 1], nums[j]) : nums[j]
        s[i]   = i % k ? Math.max(s[i + 1], nums[i]) : nums[i]
    }
    console.log(p,s);
    while (i++ < n - k) r[i] = Math.max(s[i], p[i + k - 1])
    return r
}
var maxSlidingWindow = function(nums,k){
    let n = nums.length; 
    let len = Math.sqrt(k);//分组数
    let m = n / len + 10;
    let region=[];
    function getIdx(x) {
        return x / len;
    }
    function add(x,v) {
        region[getIdx(x)] = Math.max(region[getIdx(x)],v);
    }
    function query(l,r) {
        let ans = Integer.MIN_VALUE;
        if (getIdx(l) == getIdx(r)) {
            for (let i = l; i <= r; i++) ans = Math.max(ans, nums[i]);
        } else {
            let i = l, j = r;
            while (getIdx(i) == getIdx(l)) ans = Math.max(ans, nums[i++]);
            while (getIdx(j) == getIdx(r)) ans = Math.max(ans, nums[j--]);
            for (let k = getIdx(i); k <= getIdx(j); k++) ans = Math.max(ans, region[k]);
        }
        return ans;
    }
    region = new Array(m).fill(-Infinity);
    for (let i = 0; i < n; i++) add(i, nums[i]);
    let ans = new Array(n - k + 1);
    for (let i = 0; i < n - k + 1; i++) ans[i] = query(i, i + k - 1);
    return ans;
}
let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;
// let nums = [1];
// let k = 1;
console.log(maxSlidingWindow(nums,k));
