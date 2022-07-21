//300. 最长递增子序列
/**
 * @param {number[]} nums
 * @return {number}
*/
var lengthOfLIS = function(nums) {//动态规划(67.17%)
    let len = nums.length;
    let dp = [];//dp[i]表示以nums[i]结尾的最长递增子序列长度
    let max = 1;
    for(let i=0;i<len;i++){
        if(i===0){
            dp[i] = 1;
        }else{
            dp[i] = 1;
            for(let j=0;j<i;j++){
                if(nums[j]<nums[i]){
                    dp[i] = Math.max(dp[i],dp[j]+1);
                    max = Math.max(dp[i],max);
                }
            }
        }
    }
    //console.log(dp);
    return max;
};
function binSearch(arr,target,left,right){//二分查找(96.77%)
    if(right-left<=1) return right;
    //console.log(left,right);
    let middle = ~~((left+right)/2);
    if(target<arr[middle]) return binSearch(arr,target,left,middle);
    else if(target>arr[middle]) return binSearch(arr,target,middle,right);
    else return middle;
}
var lengthOfLIS = function(nums) {//二分(96.77%)
    let d = [],len = 1;//dp[i]表示长度为i的以nums[k]结尾的最小值
    d[len] = nums[0];
    for(let i =1;i<nums.length;i++){
        if(nums[i]>d[len]){//比dp中的都要大，可以扩展
            len++;
            d[len] = nums[i];
        }else if(nums[i]<d[len]){
            let k = binSearch(d,nums[i],1,len);//找到d[n]<nums[i]<d[n+1]然后更新d[n+1]的值
            //console.log(d,nums[i],k);
            if(k===1 ||(nums[i]<d[k] && nums[i]>d[k-1])) d[k] = nums[i];
            if(nums[i]<d[k-1]) d[k-1] = nums[i];
        }
        //console.log(d);
    }
    return len;
}
var lengthOfLIS = function(nums) {//暴力算法，例举所有递增子数列,算出最长的
    let len = nums.length;
    let max = 1;
    function subArr(index,path){
        if(index === len){
            console.log(path.join(","));
            max = Math.max(max,path.length);
            return;
        }
        if(path.length<1 || (nums[index]>path[path.length-1])){
            path.push(nums[index]);
            subArr(index+1,path);
            path.pop();
        }
        subArr(index+1,path);//不选第index个放进子数组
    }
    subArr(0,[]);
    return max;
}
// console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));
console.log(lengthOfLIS([0,1,0,3,2,3]));