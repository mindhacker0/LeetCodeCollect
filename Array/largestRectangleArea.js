//84. 柱状图中最大的矩形
/**
 * @param {number[]} heights
 * @return {number}
*/
var largestRectangleArea = function(heights){//超时
    let maxArea = 0;
    let len = heights.length;
    for(let i=0;i<len;i++){
        let left =i-1,right =i+1;
        maxArea = Math.max(maxArea,heights[i]);
        while(left>=0 || right<len){
            let jump = true;
            if(left>=0 && heights[left]>=heights[i]){
                left--;
                jump = false;
            }
            if(right<len && heights[right]>=heights[i]){
                right++;
                jump = false;
            }
            if(jump){
                break;
            }
        }
        maxArea = Math.max(maxArea,heights[i]*(right - left -1));
    }
    return maxArea;
};
function Rect(index,height){
    this.index = index;
    this.height = height;
}
// var largestRectangleArea = function(heights){//单调栈
//     let maxArea = 0;
//     heights.push(0);
//     let stack = [new Rect(-1,0)];
//     for(let i=0;i<heights.length;i++){
//         while(stack.length>1 && heights[i]<stack[stack.length-1].height){//需要弹出更新答案
//             let {index,height} = stack.pop();
//             maxArea = Math.max(maxArea,height*(i - stack[stack.length-1].index -1));
//         }
//         stack.push(new Rect(i,heights[i]));
//         //console.log(stack,maxArea);
//     }
//     return maxArea;
// };
var largestRectangleArea = function(heights){//单调栈
    let maxArea = 0;
    heights.push(0);
    let stack = [-1];
    for(let i=0;i<heights.length;i++){
        while(stack.length>1 && heights[i]<heights[stack[stack.length-1]]){//需要弹出更新答案
            let index = stack.pop();
            maxArea = Math.max(maxArea,heights[index]*(i - stack[stack.length-1] -1));
        }
        stack.push(i);
        console.log(stack,maxArea);
    }
    return maxArea;
};
console.log(largestRectangleArea([2,1,5,6,2,3]));//10
console.log(largestRectangleArea([2,4]));//4
console.log(largestRectangleArea([1,1]));//2
console.log(largestRectangleArea([2,3]));//4