//215. 数组中的第K个最大元素
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
     return
    }
   let i = left
   let j = right
   const baseVal = arr[j] // 取无序数组最后一个数为基准值
   while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
    while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
     i++
    }
    arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
    while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
     j--
   }
    arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
   }
   arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
   sort(arr, left, j-1) // 将左边的无序数组重复上面的操作
   sort(arr, j+1, right) // 将右边的无序数组重复上面的操作
   return arr;
}
var findKthLargest = function(nums, k) {
    k=k-1;
    function getIndex(arr,lo,hi){
        let temp = arr[lo];
        let left = lo,right = hi;
        while(left<right){
            while(arr[right]<=temp && right>lo) right--;
            while(arr[left]>=temp && left<hi) left++;
            if(left<right){
                arr[right] ^= arr[left];
                arr[left] ^= arr[right];
                arr[right] ^= arr[left];
            }
        }
        arr[lo] = arr[right];
        arr[right] = temp;
        console.log(arr,temp,lo,hi);
        return right;
    }
    function quickSelect(arr,lo,hi){
        if(lo>hi) return;
        let index = getIndex(arr,lo,hi);//获取基准值的正确位置
        //根据K递归左边或者右边子数组,逼近第k个位置
        console.log(arr,index);
        if(index>k){
            return quickSelect(arr,lo,index-1);
        }else if(index<k){
            return quickSelect(arr,index+1,hi);
        }else{
            return arr[index];
        }
    }
    return quickSelect(nums,0,nums.length-1);
};
//console.log(findKthLargest([-1,2,0],2));
//console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));
//console.log(sort([3,2,1,5,6,4]));
//console.log(findKthLargest([3,2,1,5,6,4],2));
console.log(findKthLargest([1],1));