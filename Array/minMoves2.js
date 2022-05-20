//462. 最少移动次数使数组元素相等 II
/**
 * @param {number[]} nums
 * @return {number}
*/
var minMoves2 = function(nums) {//中位数
    let len = nums.length;
    nums.sort((a,b)=>a-b);
    console.log(nums);
    let ans;
    if(len&1){
        let mid = len>>1;
        let avgSum = 0;
        for(let j=0;j<len;j++){
            avgSum+=Math.abs(nums[j]-nums[mid]);
        }
        //console.log(avgSum);
        ans = avgSum;
    }else{
        let min = nums[(len/2)-1],max = nums[len/2];
        console.log(min,max);
        for(let i=min;i<=max;i++){
            let avgSum = 0;
            for(let j=0;j<len;j++){
                avgSum+=Math.abs(nums[j]-i);
            }
            if(typeof ans === "undefined") ans = avgSum;
            else ans = Math.min(avgSum,ans);
        }
    }
    return  ans;
};
var minMoves2 = function(nums) {//快速选择+中位数
    let len = nums.length;
    let target = len>>1;//目标顺序
    function swap(i,j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    function getIndex(start,end){
        let left = start,right = end;
        let base = nums[start];
        while(left<right){
            while(nums[left]<=base && left<end) left++;
            while(nums[right]>=base && start<right) right--;
            if(left<right) swap(left,right);
        }
        nums[start] = nums[right];
        nums[right] = base;
        return right;
    }
    function QSelect(start,end){
        if(start>end) return;
        let index = getIndex(start,end);
        if(index>target){
            return QSelect(start,index-1);
        }else if(index<target){
            return QSelect(index+1,end);
        }else{
            return index;
        }
    }
    QSelect(0,len-1);
    let cmp = nums[target];
    let ans = 0;
    for(let j=0;j<len;j++){
        ans+=Math.abs(nums[j]-cmp);
    }
    return ans;
}
console.log(minMoves2([1,0,0,8,6]));//14
console.log(minMoves2([1,10,2,9]));//16
console.log(minMoves2([203125577,-349566234,230332704,48321315,66379082,386516853,50986744,-250908656,-425653504,-212123143]));//2127271182