/**
* @param {number[]} arr
* @return {number[]}
*/
var arrayRankTransform = function(arr) {
    let map={},length=1;
	let copArr= JSON.parse(JSON.stringify(arr));
	arr.sort((a,b)=>a-b);
	map[arr[0]]=1;
	for(let i=1;i<arr.length;i++){
		if(arr[i]!==arr[i-1]){
			length++;
			map[arr[i]] = length;
		}
	}
	console.log(map);
	let result = [];
	for(let i=0;i<copArr.length;i++){
		result.push(map[copArr[i]]);
	}
	console.log(result);
	return result;
};
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));