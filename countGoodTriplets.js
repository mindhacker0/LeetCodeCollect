/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
	let result=0;
    for(let i=0;i<arr.length;i++){
	    for(let j=i+1;j<arr.length;j++){
		    for(let k=j+1;k<arr.length;K++){
			    if(arr[i]-arr[j]>=-a && arr[i]-arr[j]<=a && arr[j]-arr[k]>=-b && arr[j]-arr[k]<=b && arr[i]-arr[k]>=-c && arr[i]-arr[k]<=c){
				    result++;
			    }
		    }
	    }
    }
	return result;
};
console.log(countGoodTriplets([3,0,1,1,9,7],7,2,3));