//给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map={},result=false;
	for(let i=0;i<nums.length;i++){
		if(map[nums[i]]===undefined){
			map[nums[i]]=[];
		}else{
			let len=map[nums[i]].length;
			if(i-map[nums[i]][len-1]<=k){
				result=true;
				return result;
			}
		}
		map[nums[i]].push(i);
	}
	return result;
};
console.log(containsNearbyDuplicate([1,2,3,1],3));