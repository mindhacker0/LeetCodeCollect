/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
*/
// var getLeastNumbers = function(arr, k) {
//     return arr.sort((a,b)=>a-b).slice(0,k)
// };
var getLeastNumbers = function(arr, k) {
    if(arr.length === 0 || k===0) return [];
    function fastSort(arr,left,right){
        let base = arr[left];
        while(left<right){
            if(left<right && base <= arr[right])  right--;
            arr[left] = arr[right];
            arr[right] = base;
            if(left<right && base > arr[left])  left++;
            arr[right] = arr[left];
            arr[left] = base;
        }
        return left;
    }
    let start = 0,end = arr.length-1;
    let baseIndex = fastSort(arr,start,end);
    while(baseIndex!==k-1){
        if(baseIndex>k-1){
            end-=1;
            baseIndex = fastSort(arr,start,end);
        }else{
            start+=1;
            baseIndex = fastSort(arr,start,end);
        }
    }
    console.log(arr);
    return arr.slice(0,k);
};
console.log(getLeastNumbers([0,0,0,2,0,5],8));