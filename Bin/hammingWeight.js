/**
 * @param {number} n - a positive integer
 * @return {number}
*/
var hammingWeight = function(n) {
    function toBin(n){
		let arr=[];
		while(n!==0){
			arr.unshift(n&1);
			n=n>>1;
		}
		return arr;
	}
    return toBin(n).filter(v=>(v === 1)).length;
};
console.log(hammingWeight(128));