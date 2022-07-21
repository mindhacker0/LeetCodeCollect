/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
 var xorOperation = function(n, start) {
    let result;
    for(let i =0;i<n;i++){
      result^=start+2*i;
    }
    return result;
};
function compose(arr1,arr2){//有序数组的合并
  let i=0,j=0,result = [];
  let len = arr1.length,len1 = arr2.length;
  while(i<len || j<len1){
    if(j>=len1 || arr1[i]<arr2[j]){
      result.push(arr1[i]);
      i++;
    }else{
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}
function composeSort(arr){
  let len = arr.length,middle = ~~(len/2);
  if(len===1) return arr;
  return compose(composeSort(arr.slice(0,middle)),composeSort(arr.slice(middle)));
}
function getIndex(arr,lo,hi){
 let pivot = lo + ~~(Math.random()*(hi-lo+1));
 let base = arr[pivot];
 while(lo<=hi){
    while(arr[lo]<base) lo++;
    while(arr[hi]>base) hi--;
    console.log(lo,hi)
    if(lo===hi) break;
    if(lo<hi){
      swap(arr,lo,hi);
      lo++;hi--;
    }
 }
 console.log(pivot,base,arr)
 return hi;
}
function quickSort(arr,lo,hi){
 if(lo >= hi) return arr;
 let index = getIndex(arr,lo,hi);
 console.log(index);
 quickSort(arr,lo,index);
 quickSort(arr,index+1,hi);
}
function heapSort(arr){
    let empty = [null];
    for(let i=0;i<arr.length;i++){
        empty.push(arr[i]);
        let tail = empty.length-1;
        while((tail>>1) && empty[tail>>1]<empty[tail]){
          swap(empty,tail>>1,tail);
          tail = tail>>1;
        }
    }
    let result = [];
    while(empty.length>1){
        let tail = empty.length-1;
        let start = 1;
        swap(empty,start,tail);
        result.push(empty.pop());
        while((start<<1)<empty.length){
          let left = (start<<1),right = (start<<1)+1,next;
          if(right<empty.length){
            next = empty[left]<empty[right]?right:left;
          }else{
            next = left;
          }
          if(empty[next]>empty[start]){
            swap(empty,next,start);
            start = next;
          }else{
            break;
          }
        }
        console.log(empty);
    }
    return result;
}
function insertSort(arr){
  let len = arr.length;
  for(let i=1;i<len;i++){
    if(arr[i]<arr[i-1]){
      let temp = arr[i],j = i-1;
      for(;j>=0 && temp<arr[j];j--){
        arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
      console.log(arr);
    }
  }
  return arr;
}
let sortArr = [1,4,5,2,5,2,1,5,6,9,12,3,241,61,1,0,-77];
console.log(getIndex([3,0,4,1,2],0,4));
//quickSort(sortArr,0,sortArr.length-1)
//console.log(sortArr);
//console.log(quickSort([5,1,1,2,0,0],0,5));
//console.log(xorOperation(5,0))