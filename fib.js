/**
* @param {number} n
* @return {number}
*/
var fib = function(n) {
    var obj=Object.create(null);
	function dfs(m){
		if(m===0){return 0;}
		if(m===1){return 1;}
		if(obj[m]){return obj[m];}
		obj[m] = dfs(m-1)+dfs(m-2);
		return obj[m];
	}
	return dfs(n);
};
fib(2);