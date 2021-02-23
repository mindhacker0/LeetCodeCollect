/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
	let result=[];
    for(let i=0;i<A.length;i++){
		result.push(A[i].reverse().map((val)=>1^val));
	}
	console.log(result);
};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));