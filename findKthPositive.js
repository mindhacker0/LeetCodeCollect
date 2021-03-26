/**
* @param {number[]} arr
* @param {number} k
* @return {number}
*/
var findKthPositive = function(arr, k) {
	let temp =arr[0]-1;
	if(temp>=k) return k;
    for(let i=1;i<arr.length;i++){
		temp+=arr[i]-arr[i-1]-1;
		console.log(temp);
		if(temp>=k) return arr[i-1]+k-(temp-(arr[i]-arr[i-1]-1));
	}
	return arr[arr.length-1]+(k-temp);
};
console.log(findKthPositive(
[1,10,21,22,25],
12));