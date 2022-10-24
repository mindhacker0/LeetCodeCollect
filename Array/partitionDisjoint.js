//915. 分割数组
/**
 * @param {number[]} nums
 * @return {number}
*/
var partitionDisjoint = function(nums) {//双指针
    let left = 0,right = nums.length-1;
    let leftMax = [nums[0]],rightMin = [];
    rightMin[right] = nums[right];
    while(left<right){
        if(leftMax[left]<=rightMin[right]){
            right--;
            rightMin[right] = Math.min(rightMin[right+1],nums[right]);
        }else{
            left++;
            leftMax[left] = Math.max(leftMax[left-1],nums[left]);
        }
    }
    //console.log(left,right,leftMax,rightMin);
    while(leftMax[left]>rightMin[++right]){
        left++;
        leftMax[left] = Math.max(leftMax[left-1],nums[left]);
    }
    return left+1;
};
var partitionDisjoint = function(nums) {//离散化+排序(8.33%)
    let arr = nums.map((val,index)=>({val,index}));
    arr.sort((a,b)=>a.val-b.val);
    let i = 0,max=-1;
    for(;i<arr.length;i++){
        max = Math.max(max,arr[i].index);
        if(max === i) break;
    }
    return max+1;
}
//ST表查找静态空间的最值，RMQ
class SparseTable{
    constructor(arr,fn){//构造
        let len = arr.length;//i
        let lmax = Math.ceil(Math.log2(len));//j取长度的2的对数
        this.st = new Array(len+1).fill(false).map(()=>new Array(lmax+1).fill(0));
        this.fn = fn||Math.max;
        for(let i=1;i<=len;i++) this.st[i][0] = arr[i-1];
        for(let j=1;j<=lmax;j++){
            for(let i=1;i+(1<<j)-1<=len;i++){
                this.st[i][j] = this.fn(this.st[i][j-1],this.st[i+(1<<(j-1))][j-1]);
            }
        }
    }
    query(l,r){//查询
        l++;r++;
        let k = Math.floor(Math.log2(r-l+1));
        return this.fn(this.st[l][k],this.st[r - (1<<k)+1][k]);
    }
}
var partitionDisjoint = function(nums) {//ST表
    let maxSt = new SparseTable(nums,Math.max);
    let minSt = new SparseTable(nums,Math.min);
    for(let i=0;i<nums.length-1;i++){
        if(maxSt.query(0,i)<=minSt.query(i+1,nums.length-1)) return i+1;
    }
    return -1;
}
console.log(partitionDisjoint([5,0,3,8,6]));//3
// console.log(partitionDisjoint([1,1]));
// console.log(partitionDisjoint([32,57,24,19,0,24,49,67,87,87]));//7
// console.log(partitionDisjoint([3,1,8,4,9,7,12,0,0,12,6,12,6,19,24,90,87,54,92,60,31,59,75,90,20,38,52,51,74,70,86,20,27,91,55,47,54,86,15,16,74,32,68,27,19,54,13,22,34,74,76,50,74,97,87,42,58,95,17,93,39,33,22,87,96,90,71,22,48,46,37,18,17,65,54,82,54,29,27,68,53,89,23,12,90,98,42,87,91,23,72,35,14,58,62,79,30,67,44,48]));