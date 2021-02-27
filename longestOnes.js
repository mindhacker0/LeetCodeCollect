/**
* @param {number[]} A
* @param {number} K
* @return {number}
*/
var longestOnes = function(A, K) {
	let left=0,right=0,zeroCount=0;
	while(right<A.length){
		zeroCount+=A[right]===0;
		if(zeroCount<=K){
			right++;
		}else{
			zeroCount-=A[left]===0;
			left++;
			right++;
		}
	}
	console.log(left,right);
	return right-left;
};
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));