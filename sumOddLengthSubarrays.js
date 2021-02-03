/*给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。

子数组 定义为原数组中的一个连续子序列。

请你返回 arr 中 所有奇数长度子数组的和 。

来源：力扣（LeetCode）*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
	let sum=0;
  for(let i=1;i<=arr.length;i+=2){
	for(let j=0;j<arr.length-i+1;j++){
		for(let k=0;k<i;k++){
			console.log(j+k);
			sum+=arr[j+k];
		}
	}
  }
  return sum;
};
console.log(sumOddLengthSubarrays([1,4,2,5,3]));