//56. 合并区间
/**
 * @param {number[][]} intervals
 * @return {number[][]}
*/
var merge = function(intervals){
    intervals.sort((a,b)=>a[0]-b[0]);
    console.log(intervals);
    let start=-1,end=-1;
    let result=[];
    for(let i=0;i<intervals.length;i++){
        let range = intervals[i];
        if(end<range[0]){
          (i!==0) && result.push([start,end]);
          start = range[0];
          end = range[1];
        }else{
          end=end>range[1]?end:range[1];
        }
        console.log(start,end);
    }
    result.push([start,end]);
    return result;
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));