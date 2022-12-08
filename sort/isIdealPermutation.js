//775. 全局倒置与局部倒置
/**
 * @param {number[]} nums
 * @return {boolean}
*/
var isIdealPermutation = function(nums){//归并排序  n*lgn
    let global = 0;
    function merge(arr1,arr2){
        let index1 = 0,index2 =0;
        let arr = [];
        while(index1<arr1.length||index2<arr2.length){
            if((index1<arr1.length && arr1[index1]<arr2[index2])||index2>=arr2.length){
                arr.push(arr1[index1]);
                index1++;
            }else{
                global +=arr1.length-index1;
                arr.push(arr2[index2]);
                index2++;
            }
        }
        return arr;
    }
    function mergeSort(arr){
        if(arr.length<=1) return arr;
        let mid = arr.length>>1;
        return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)));
    }
    let local = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]>nums[i]) local++;
    }
    mergeSort(nums);
    return local === global;
};
var isIdealPermutation = function(nums){//树状数组
  
}
// console.log(isIdealPermutation([1,2,0]));
// console.log(isIdealPermutation([2,0,1]));
console.log(isIdealPermutation([2,0,3,1]));