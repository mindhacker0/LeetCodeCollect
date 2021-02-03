/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let newArr=[],i=0;j=nums.length-1;
  while(i<=j){
	if(nums[i]**2>nums[j]**2){
		newArr.unshift(nums[i]**2);
		i++;
	}else{
		newArr.unshift(nums[j]**2);
		j--;
	}
  }
  return newArr;
};
console.log(sortedSquares([-4,-1,0,3,10]));