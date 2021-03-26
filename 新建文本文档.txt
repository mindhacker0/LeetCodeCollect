/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
	let arr = [];
	for(let i=0;i<indices.length;i++){
		arr[indices[i]]=s[i];
	}
	//console.log(arr);
	return arr.join("");
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));