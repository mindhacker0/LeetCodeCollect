/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
	let maxLen=0;
    for(let i=1;i<points.length;i++){
		maxLen += Math.max(points[i][0]-points[i-1][0],points[i][1]-points[i-1][1]);
	}
	return maxLen;
};
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));