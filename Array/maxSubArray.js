//53. 最大子数组和
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {//线段树
   if(nums.length === 0) return 0;
   function middleSum(start,middle,end){
      let sumL = 0;
      let maxL = Number.MIN_SAFE_INTEGER;
      for(let i = middle;i>=start;i--){
         sumL+=nums[i];
         if(maxL<sumL) maxL = sumL;
      }
      let sumR = 0;
      let maxR = Number.MIN_SAFE_INTEGER;
      for(let i = middle+1;i<=end;i++){
         sumR+=nums[i];
         if(maxR<sumR) maxR = sumR;
      }
      return maxL+maxR;
   }
   function subTree(start,end){
      //console.log(start);
      if(start == end) return nums[start];
      let middle = (end + start)>>1;
      //console.log(start,middle,end);
      let leftSum = subTree(start,middle); 
      let rightSum = subTree(middle+1,end);
      let middleMax = middleSum(start,middle,end);
      return Math.max(leftSum,Math.max(rightSum,middleMax));
   }
   return subTree(0,nums.length-1);
}
class treeNode{
   constructor(val=0,left=null,right=null){
      this.val = val;
      this.left = left;
      this.right = right;
      this.l = 0;
      this.r = 0;
   }
}
class SegTree{
   constructor(nums){
      this.data = nums;
      this.size = nums.length;
      this.root = new treeNode();
      this.init();
   }
   init(){
      const vm = this;
      function maketree(node,left,right){
         node.l = left;
         node.r = right;
         if(left === right){node.val = vm.data[left-1];return node.val;} 
         let middle = (left+right)>>1;
         node.left = new treeNode();
         let lmax = maketree(node.left,left,middle);
         node.right = new treeNode();
         let rmax = maketree(node.right,middle+1,right);
         let mmax = Number.MIN_SAFE_INTEGER;
         let lsum = 0,mlmax = Number.MIN_SAFE_INTEGER;
         for(let i=middle;i>=left;i--){lsum+=vm.data[i-1];mlmax=Math.max(mlmax,lsum);}
         let rsum = 0,mrmax = Number.MIN_SAFE_INTEGER;
         for(let i=middle+1;i<=right;i++){rsum+=vm.data[i-1];mrmax=Math.max(mrmax,rsum);}
         mmax = mlmax+mrmax;
         node.val = Math.max.call(null,lmax,rmax,mmax);
         return node.val;//表示区间的最大和
      }
      maketree(this.root,1,this.size);
   }
   query(l,r){
     
   }
}
var maxSubArray = function(nums) {//动态规划
   if(nums.length === 0) return 0;
   let addArr = [nums[0]];
   let max = nums[0];
   for(let i=1;i<nums.length;i++){
      addArr[i] = Math.max(addArr[i-1]+nums[i],nums[i]);
      if(max<addArr[i]) max = addArr[i];
   }
   console.log(addArr);
   return max;
};
// let segtree = new SegTree([-2,1,-3,4,-1,2,1,-5,4]);
// console.log(segtree.root);
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));