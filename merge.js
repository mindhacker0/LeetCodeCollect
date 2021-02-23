/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1,m,nums2,n){
	if(n===0) return nums1;
    let i=0,j=0,result=[];
	nums1.splice(m);
    while(i<m && j<n){
		if(nums1[i]<nums2[j]){
			result.push(nums1[i]);
			i++;
		}else{
			result.push(nums2[j]);
			j++;
		}
	}
	console.log(i,j);
	result=result.concat(nums1.splice(i)).concat(nums2.splice(j));
	for(let k=0;k<result.length;k++){
		nums1[k]=result[k];
	}
	console.log(nums1);
};
//console.log(merge([1,2,3],3,[2,5,6],3));
console.log(merge([2,0],1,[1],1));