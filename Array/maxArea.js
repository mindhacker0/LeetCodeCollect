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
console.log(maxArea([2,3,4,5,18,17,6]));