//496. 下一个更大元素 I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let greater = [],map = new Map;
    for(let i=0;i<nums2.length;i++){        
        while(greater.length && greater[greater.length-1]>nums2[i]) greater.pop();
        greater.push(nums2[i]);
    }
};
console.log(nextGreaterElement([1,4,2,5,8,3,9]));