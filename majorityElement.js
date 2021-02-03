/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={};
	for(let n of nums){
		obj[n]?obj[n]++:(obj[n]=1);
	}
	let max=0,token=null;
	for(let s in obj){
		if(obj[s]>max){
           max=obj[s];
           token=s;
        }
	}
	console.log(max);
	return max>=(nums.length/2)?token:-1;
};
majorityElement([1,2,5,9,5,9,5,5,5])