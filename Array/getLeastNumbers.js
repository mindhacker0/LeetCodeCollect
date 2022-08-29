/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
*/
var getLeastNumbers = function(arr, k) {//(26.47%)
    arr.sort((a,b)=>a-b);
    return arr.splice(0,k);
};
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
var getLeastNumbers = function(arr, k) {//(57.38%)
    let heap = new minHeap();
    for(let i=0;i<arr.length;i++) heap.insert(arr[i]);
    let result = [];
    for(let i=0;i<k;i++) result.push(heap.take());
    return result;
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
class minHeap{//小根堆
    constructor(){
        this.base = [null];
        this.size = 0;
    }
    insert(val){
        this.base.push(val);
        this.size++;
        this.heapifyUp();
    }
    take(){
        let start = 1,end = this.size;
        if(start < end) swap(start,end);
        let elem = this.base.pop();
        this.size--;
        this.heapifyDown();
        return elem;
    }
    heapifyUp(){//向上调整
        let index = this.size;
        while(index>1 && this.base[index]<this.base[index>>1]){
            let parent = index>>1;
            swap(this.base,index,parent);
            index = parent;
        }
    }
    heapifyDown(){//向下调整
        let index = 1;
        while((index<<1)<=this.size){
            let left = index<<1,right = (index<<1)+1;
            let next = left;
            if(right<=this.size&&this.base[right]<this.base[left]) next = right;
            if(this.base[index]>this.base[next]){swap(this.base,index,next);index = next;}
            else break;
        }
    }
}
var getLeastNumbers = function(arr, k) {
    function getIndex(start,end){
        let baseIndex = start+Math.floor(Math.random()*(end-start+1));
        let baseVal = arr[baseIndex];
        while(start<=end){
            while(arr[start]<baseVal) start++;
            while(arr[end]>baseVal) end--;
            if(start === end) break;
            if(start<end){
                swap(arr,start,end);
                start++;end--;
            }
        }
        return end;
    }
    function quickSort(start,end){
        if(start>=end) return;
        let base = getIndex(start,end);
        console.log(base);
        if(base===k-1){
            return;
        }else if(base<k){
            quickSort(base+1,end);
        }else{
            quickSort(start,base);
        }
    }
    quickSort(0,arr.length-1);
    console.log(arr);
    return arr.slice(0,k);
}
console.log(getLeastNumbers([0,0,1,2,4,2,2,3,1,4],8));