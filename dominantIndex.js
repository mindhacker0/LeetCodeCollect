/**
* @param {number[]} nums
* @return {number}
*/
var dominantIndex = function(nums) {
	if(nums.length===1) return 0;
	let lessmax=-1;
    let max=nums[0],index=0;
    for(let i=1;i<nums.length;i++){
	    if(nums[i]>max){
		   lessmax=max;
		   max=nums[i];
		   index=i;
	    }else if(nums[i]>lessmax){
			lessmax=nums[i]
		}
    }
	//console.log(max,lessmax);
	return max>=lessmax*2?index:-1;
};
console.log(dominantIndex([1,0]));