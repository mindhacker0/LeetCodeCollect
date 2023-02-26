//1326. 灌溉花园的最少水龙头数目
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {//贪心
    let range = [];
    for(let i=0;i<ranges.length;++i){
        range.push([i-ranges[i]<0?0:(i-ranges[i]),i+ranges[i]]);
    }
    range.sort((a,b)=>a[0]===b[0]?b[1]-a[1]:a[0]-b[0]);
    console.log(range);
    let r = 0,count = 0;
    for(let i=0;i<range.length;){
        if(i>0 && range[i][0] === range[i-1][0]) continue;
        if(i>0 && range[i][0]>r) return -1;
        if(r>=n) return count;
        let j=i,max = r;
        while(j<range.length){
            if(range[j][0]<=r) max = Math.max(max,range[j][1])
            else break;
            ++j;
        }
        ++count;
        r = max;
        console.log(r)
        i=j;
    }
    return r>=n?count:-1;
};
// console.log(minTaps(5,[3,4,1,1,0,0]));//1
// console.log(minTaps(3,[0,0,0,0]));//-1
// console.log(minTaps(8,[4,0,0,0,4,0,0,0,4]));//1
// console.log(minTaps(9,[0,5,0,3,3,3,1,4,0,4]));//2
console.log(minTaps(7,[1,2,1,0,2,1,0,1]));