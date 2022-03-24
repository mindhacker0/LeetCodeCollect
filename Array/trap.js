//42. 接雨水
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {//单调栈
    let stack = [];
    let totalWater = 0;
    for(let i=0;i<height.length;i++){
        while(stack.length > 0 && height[i] > height[stack[stack.length-1]]){
            let index = stack.pop();
            if(stack.length>=1){
                let wall = Math.min(height[stack[stack.length-1]],height[i]);
                totalWater += (wall-height[index])*(i - stack[stack.length-1]-1);
                console.log(wall-height[index],(i - stack[stack.length-1]-1),totalWater)
            }
        }
        stack.push(i);
        console.log(stack.map((i)=>height[i]),totalWater)
    }
    return totalWater;
};
var trap = function(height) {//前后缀
    let len = height.length;
    let premax = [height[0]],appendMax = new Array(len);
    appendMax[len-1] = height[len-1];
    for(let i =1;i<height.length;i++){
        premax[i] = Math.max(premax[i-1],height[i]);
        appendMax[len-i-1] =  Math.max(appendMax[len-i],height[len-i-1]);
    }
    //console.log(premax,appendMax);
    let ans = 0;
    for(let i=0;i<len;i++){
        ans+= Math.min(premax[i],appendMax[i]) - height[i];
    }
    return ans;
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));//6
console.log(trap([4,2,0,3,2,5]));//9
console.log(trap([2,1,0,1,2]));//4