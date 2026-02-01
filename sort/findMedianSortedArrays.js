/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function swap(arr,x,y){
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
class HeapNode{
    constructor(weight,payload){
        this.weight = weight;
        this.payload = payload;
    }
}
class MinHeap{
    constructor(){
        this.root=[null];
    }
    offer(weight,node){//添加
       const insertNode = new HeapNode(weight,node);
       this.root.push(insertNode);
       this.heapfyUp();
    }
    poll(){//取出
        const len = this.root.length;
        if(len<2) return null;
        swap(this.root,1,len-1);
        const takeNode = this.root.pop();
        this.heapfyDown();
        return takeNode;
    }
    heapfyUp(){
        let curIndex = this.root.length - 1;
        while((curIndex>>1)>0){
            const parent = curIndex>>1;
            if(this.root[parent].weight>this.root[curIndex].weight){
                swap(this.root,parent,curIndex);
                curIndex = parent;
            }else break;
        }
    }
    heapfyDown(){
        let curIndex = 1;
        while((curIndex<<1)<this.root.length){
            const left = curIndex<<1,right = left + 1;
            const next = right>=this.root.length||this.root[left].weight<this.root[right].weight?left:right;
            if(this.root[curIndex].weight>this.root[next].weight){
                swap(this.root,curIndex,next);
                curIndex = next;
            }else break;
        }
    }
}
class MaxHeap{
    constructor(){
        this.root=[null];
    }
    offer(weight,node){//添加
       const insertNode = new HeapNode(weight,node);
       this.root.push(insertNode);
       this.heapfyUp();
    }
    poll(){//取出
        const len = this.root.length;
        if(len<2) return null;
        swap(this.root,1,len-1);
        const takeNode = this.root.pop();
        this.heapfyDown();
        return takeNode;
    }
    heapfyUp(){
        let curIndex = this.root.length - 1;
        while((curIndex>>1)>0){
            const parent = curIndex>>1;
            if(this.root[parent].weight<this.root[curIndex].weight){
                swap(this.root,parent,curIndex);
                curIndex = parent;
            }else break;
        }
    }
    heapfyDown(){
        let curIndex = 1;
        while((curIndex<<1)<this.root.length){
            const left = curIndex<<1,right = left + 1;
            const next = right>=this.root.length||this.root[left].weight>this.root[right].weight?left:right;
            if(this.root[curIndex].weight<this.root[next].weight){
                swap(this.root,curIndex,next);
                curIndex = next;
            }else break;
        }
    }
}
// var findMedianSortedArrays = function(nums1, nums2) {//归并O(m+n) AC 16.79%
//     let index1 = 0,index2 = 0;
//     const res = [],len1 = nums1.length,len2 = nums2.length;
//     while(index1<len1 || index2<len2){
//         if((index1<len1 && nums1[index1]<nums2[index2]) || index2>=len2){
//             res.push(nums1[index1]);
//             ++index1;
//         }else{
//             res.push(nums2[index2]);
//             ++index2;
//         }
//     }
//     const mid = (len1+len2)/2;
//     const index = Math.floor(mid);
//     console.log(mid%1)
//     return mid%1?res[index]:(res[index-1]+res[index])/2;
// };
// var findMedianSortedArrays = function(nums1, nums2) {//指针
//     let x = 0,y = 0;
//     let len1 = nums1.length,len2 = nums2.length;
//     let pre = 0,now = 0;
//     while((x+y)<=(len1+len2+1)>>1){
//         pre = now;
//         if((x<len1 && nums1[x]<nums2[y]) || y>=len2){now = nums1[x++];} 
//         else{now = nums2[y++];}
//         console.log(x,y,pre,now);
//     }
//     if((len1+len2)%2){
//         return pre
//     } return (pre+now)/2;
// }
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    //二分法不断排除前k/2的数
    const len1 = nums1.length,len2 = nums2.length;
    let k = (len1+len2+2)>>1;
    let startx = 0;
    let startY = 0;
    let prev = 0;
    while(k>1){
        const mid = (k>>1);
        console.log(k,startx+mid-1,startY+mid-1)
        if(nums1[startx+mid-1]<nums2[startY+mid-1]){
            prev = Math.max(prev,nums1[startx+mid-1]);
            startx += mid;
        }else{
            prev = Math.max(prev,nums2[startY+mid-1]);
            startY += mid;
        }
        k = mid;
    }
    const next = Math.min(nums1[startx+1],nums2[startY+1]);
    console.log(prev,next);
    return next;
}


// var findMedianSortedArrays = function(nums1, nums2) {
//     if (nums1.length > nums2.length) {
//         return findMedianSortedArrays(nums2, nums1);
//     }

//     let x = nums1.length;
//     let y = nums2.length;

//     let low = 0, high = x;
//     while (low <= high) {
//         let partitionX = (low + high) >> 1;
//         let partitionY = ((x + y + 1) >> 1) - partitionX;
 
//         let maxX = (partitionX == 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
//         let minX = (partitionX == x) ? Number.POSITIVE_INFINITY : nums1[partitionX];

//         let maxY = (partitionY == 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
//         let minY = (partitionY == y) ? Number.POSITIVE_INFINITY : nums2[partitionY];

//         if (maxX <= minY && maxY <= minX) {
//             if ((x + y) % 2 == 0) {
//                 return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
//             } else {
//                 return Math.max(maxX, maxY);
//             }
//         } else if (maxX > minY) {
//             high = partitionX - 1;
//         } else {
//             low = partitionX + 1;
//         }
//         console.log(low,high)
//     }
// };
console.log(findMedianSortedArrays([1,3,8,9],[2,4,6,10]));//1,2,3,4,6,8,9,10
// @lc code=end

