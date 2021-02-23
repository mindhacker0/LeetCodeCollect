/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
	let result=[];
    for(let i=0;i<accounts.length;i++){
		result.push(accounts[i].reduce((a,b)=>a+b,0));
	}
	return Math.max.call(null,...result);
};
console.log(maximumWealth([[1,5],[7,3],[3,5]]));