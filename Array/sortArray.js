/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    /*function getIndex(arr,lo,hi){//从大到小排序
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
    }*/
    function getIndex(arr,lo,hi){//从小到大
        let temp = arr[lo];
        let left = lo,right = hi;
        while(left<right){
            while(arr[right]>=temp && right>lo) right--;
            while(arr[left]<=temp && left<hi) left++;
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
    function quickSort(arr,lo,hi){
        if(lo>hi) return;
        let index = getIndex(arr,lo,hi);//获取基准值的正确位置
        //根据K递归左边或者右边子数组,逼近第k个位置
        console.log(arr,index);
        quickSort(arr,lo,index-1);
        quickSort(arr,index+1,hi);
    }
    quickSort(nums,0,nums.length-1);
    return nums;
};
console.log(sortArray([5,2,3,1]));