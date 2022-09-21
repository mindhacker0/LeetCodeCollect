//496. 下一个更大元素 I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2){//普通模拟
    let map = new Map;
    for(let i=0;i<nums2.length;i++){        
        map.set(nums2[i],i);
    }
    let ans = [];
    for(let j=0;j<nums1.length;j++){
        let index = map.get(nums1[j]);
        while(index<nums2.length&&nums2[index]<=nums1[j]) index++;
        ans.push(index===nums2.length?-1:nums2[index]);
    }
    return ans;
};
var nextGreaterElement = function(nums1, nums2){//单调栈
    let stack = [];
    let map = new Map;
    for(let i=nums2.length-1;i>=0;i--){
        while(stack.length && stack[stack.length-1]<=nums2[i]) stack.pop();//矮个的起开
        map.set(nums2[i],stack.length?stack[stack.length-1]:-1);
        stack.push(nums2[i]);
    }
    return nums1.map((val)=>map.get(val));
}
console.log(nextGreaterElement([4,1,2],[1,3,4,2]));