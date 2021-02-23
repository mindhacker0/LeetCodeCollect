/*给定一个无重复元素的有序整数数组 nums 。

返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

列表中的每个区间范围 [a,b] 应该按如下格式输出：

"a->b" ，如果 a != b
"a" ，如果 a == b*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
	if(nums === []) return [];
	nums.sort((a,b)=>a-b);
	let arr=[],startWith=nums[0],endWith=nums[0],counter=1;
	for(let i=1;i<nums.length;i++){
		if(startWith+counter!==nums[i]){
			if(startWith === endWith)
			    arr.push(`${startWith}`);
			else
			    arr.push(`${startWith}->${endWith}`);
			startWith=nums[i];
			endWith=nums[i];
			counter=1;
		}else{
			counter++;
		    endWith++;
			console.log(startWith,endWith);
		}
	}
	if(startWith === endWith)
		arr.push(`${startWith}`);
	else
		arr.push(`${startWith}->${endWith}`);
	console.log("end",startWith,endWith);
    console.log(arr);
};
console.log(summaryRanges([]));