//给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0,result=false;;
	for(let i=0;i<arr.length;i++){
		if(arr[i]%2===1){
			count++;
			if(count === 3) result=true;
		}else{
			count=0;
		}
	}
	return result;
};