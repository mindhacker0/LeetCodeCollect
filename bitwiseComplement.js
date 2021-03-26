/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N){
	if(N===0) return 1;
	let binList = toBin(N);
    function toBin(n){
		let arr=[];
		while(n!==0){
			arr.unshift(1-n%2);
			n=~~(n/2);
		}
		return arr;
	}
	console.log(binList);
	return parseInt(binList.join(""),2);
};
console.log(bitwiseComplement(0));