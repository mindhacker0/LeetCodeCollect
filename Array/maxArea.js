//11. 盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length<=1) return 0;
    let left=0,right=height.length-1,max =0;
    while(right>left){
        let capacity = Math.min(height[left],height[right])*(right-left);
        if(capacity>max){
            max = capacity;
        }
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return max;
};
var maxArea = function(height) {//暴力
    let len = height.length;
    let ans = 0;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            ans = Math.max(ans,(j-i)*(Math.min(height[i],height[j])));
        }
    }
    return ans;
}
var maxArea = function(height) {//双指针 贪心
    let len = height.length;
    let ans = 0;
    let left = 0,right = len-1;
    while(left<right){
        ans = Math.max(ans,(right-left)*(Math.min(height[left],height[right])));
        if(height[left]<height[right]) left++;
        else right--;
    }
    return ans;
}
var maxArea = function(height) {//单调栈
    let len = height.length;
    let ans = 0;
    let stack = [];
    let stackMax = [];
    for(let i=0;i<len;i++){
        while(stackMax.length && height[i]>=height[stackMax[stackMax.length-1]]) stackMax.pop();
        stackMax.push(i);
        console.log(stackMax.map(val=>height[val]));
    }
    for(let i=0;i<len;i++){
        if(height[i]<stackMax[stackMax.length-1]) continue;
        for(let j=0;j<stackMax.length;j++){
            if(i<stackMax[j]){
                ans = Math.max(ans,(stackMax[j]-i)*(Math.min(height[stackMax[j]],height[i])));
            }
        }
    }
    return ans;
}
console.log(maxArea([2,3,4,5,18,17,6]));//17