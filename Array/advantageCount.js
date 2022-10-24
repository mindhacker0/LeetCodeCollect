//870. 优势洗牌
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
*/
var advantageCount = function(nums1, nums2) {
    nums2 = nums2.map((val,index)=>({val,index}));
    nums2.sort((a,b)=>a.val-b.val);
    console.log(nums2);
    let ans = [];
    nums1.sort((a,b)=>a-b);
    let last = [];
    let left = 0,right = 0;
    while(left<nums1.length){
        if(nums1[left]>nums2[right].val){
            ans[nums2[right].index] = nums1[left];
            right++;
        }else{
            last.push(nums1[left]);
        }
        left++;
    }
    console.log(ans);
    if(last.length){
        for(let i=0;i<nums1.length;i++){
            if(typeof ans[i]==="undefined") ans[i] = last.pop();
        }
    }
    return ans;
};
console.log(advantageCount([2,7,11,15],[1,10,4,11]));