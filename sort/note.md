### 排序算法

#### 比较排序

##### 冒泡排序
```js
function swap(arr,i,j){//冒泡排序
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function barbooSort(arr){
    if(arr.length<=1) return arr;
    let order = true;
    for(let i=1;i<arr.length;i++){
        if(arr[i-1] > arr[i]){swap(arr,i-1,i);order = false;} 
    }
    return order?arr:barbooSort(arr);
}
```
##### 选择排序
```js
function selectSort(arr){
    let len = arr.length;
    if(len<=1) return arr;
    for(let i=0;i<len;i++){
        let max = arr[0],maxIndex = 0;
        for(let j=1;j<len-i;j++){
            if(arr[j] > max){
                max = arr[j];
                maxIndex = j;
            }
        }
        swap(arr,maxIndex,len-i-1);
    }
    return arr;
}
```
##### 插入排序
```js
function insertSort(arr){
    let empty = [];
    let len = arr.length;
    for(let i=0;i<len;i++){
        let j=empty.length,insert = arr[i];
        while(j>0 && empty[j-1]>insert){
            swap(empty,j-1,j);
            j--;
        } 
        empty[j] = insert;
        //console.log(empty);
    }
    return empty;
}
```
##### 归并排序
```js
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
```
##### 快速排序
```js
function findIndex(arr,left,right){
  let base = arr[left];
  let i=left,j=right;
  while((i<right)&&(j>left)&&(i<j)){
    while(i<right && arr[i]<=base) i++;
    while(j>left && arr[j]>=base) j--;
    if(i<right && j>left && i<j) swap(arr,i,j);
  }
  swap(arr,left,j);
  return j;
}
function quickSort(arr,start,end){
  if(start>end) return arr;
  let index = findIndex(arr,start,end);
  quickSort(arr,start,index-1);
  quickSort(arr,index+1,end);
}
```
##### 堆排序
```js
function heapSort(arr){//通过构建堆和取出元素，使得数组有序
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
```
##### 希尔排序
```js

```
#### 非比较排序

##### 桶排序
##### 基数排序
##### 计数排序

### 查找算法

##### 二分查找
##### BF算法
##### KARP查找
##### KMP