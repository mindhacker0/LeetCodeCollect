//769. 最多能完成排序的块
/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function(arr) {
    let stack = [];
    let ans = 0;
    for(let i=0;i<arr.length;i++){
        while(stack.length && stack[stack.length-1]<arr[i]) stack.pop();
        console.log(stack,arr[i]);
        if(stack.length===0) ans++;
        stack.push(arr[i]);
    }
    return ans;
};
// console.log(maxChunksToSorted([1,0,2,3,4]));
// console.log(maxChunksToSorted([4,3,2,1,0]));
console.log(maxChunksToSorted([1,2,0,3]));//2