//剑指 Offer 51. 数组中的逆序对
/**
 * @param {number[]} nums
 * @return {number}
*/
var reversePairs = function(nums){//回溯
    let count = 0;
    function trace(index,path){
        if(index === 2){
            // console.log(path);
            if(nums[path[0]]>nums[path[1]]) count++;
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(path.length && path[0]>=i) continue;
            path.push(i);
            trace(index+1,path);
            path.pop();
        }
    }
    trace(0,[]);
    return count;
};
// 完成排序后的逆序对为0，计算排序中用了几次交换
// var reversePairs = function(nums){//排序 不行
//     let len = nums.length;
//     let count = 0;
//     function swap(i,j){
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//         count++;
//     }
//     function getPivot(lo,hi){
//         let pivot = lo + ~~(Math.random()*(hi-lo+1));
//         let base = nums[pivot];
//         while(lo<=hi){
//             while(nums[lo]<base) lo++;
//             while(nums[hi]>base) hi--;
//             if(lo===hi) break;
//             if(lo<hi){
//                 swap(lo,hi);
//                 lo++;
//                 hi--;
//             }
//         }
//         return hi;
//     }
//     function quickSort(start,end){
//         if(start>=end) return;
//         let index = getPivot(start,end);
//         quickSort(start,index);
//         quickSort(index+1,end);
//     }
//     quickSort(0,len-1);
//     return count;
// }
var reversePairs = function(nums){//归并排序
    let count = 0;
    function merge(arr1,arr2){
        //console.log(arr1,arr2);
        let arr = [];
        let len1 = arr1.length;let len2 = arr2.length;
        let l=0,r=0;
        while(l<len1||r<len2){
            if((l<len1 && arr1[l]<arr2[r])||r>=len2){
                arr.push(arr1[l]);
                l++;
            }else{
                count+=len1-l;
                arr.push(arr2[r]);
                r++;
            }
        }
        console.log(arr);
        return arr;
    }
    function mergeSort(arr){
        let len = arr.length;
        if(len<=1) return arr;
        let mid=len>>1;
        return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid,len)));
    }
    mergeSort(nums);
    return count;
}
const lowBit=(x)=>x&-x;
class BIT{
    constructor(len){
        this.size = len+1;
        this.arr = new Array(len+1).fill(0);
    }
    update(index,val){
        for(;index<this.size;index+=lowBit(index)) this.arr[index]+=val;
    }
    query(index){
       let ans = 0;
       for(;index>0;index-=lowBit(index)) ans+=this.arr[index];
       return ans;
    }
}
function binSearch(arr,target){
    let len = arr.length;
    let left = 0,right = len-1;
    while(left<right){
        let mid = (left+right)>>1;
        if(arr[mid]<target){
            left = mid+1;
        }else if(arr[mid]>target){
            right = mid;
        }else{
            left = right = mid;
            break;
        }
    }
    return left;
}
var reversePairs = function(nums){//树状数组
    let temp = JSON.parse(JSON.stringify(nums));
    temp.sort((a,b)=>a-b);
    let len = nums.length;
    let bit = new BIT(len);
    let ans = 0;
    let order = [];
    for(let i=0;i<len;i++){
        order[i] = binSearch(temp,nums[i])+1;
    }
    for(let i=len-1;i>=0;i--){
        ans+=bit.query(order[i]-1);
        bit.update(order[i],1);
        console.log(order[i],bit)
    }
    return ans;
}
console.log(reversePairs([4,5,6,7]));
// console.log(reversePairs([1,3,2,3,1]));//4