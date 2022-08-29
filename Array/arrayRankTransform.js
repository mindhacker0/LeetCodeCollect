//1331. 数组序号转换
/**
 * @param {number[]} arr
 * @return {number[]}
*/
var arrayRankTransform = function(arr) {
    let cache = [];
    let len = arr.length;
    for(let i=0;i<len;i++){
        cache.push({
            index:i,
            val:arr[i]
        });
    }
    let result = [],rank = 1;
    cache.sort((a,b)=>a.val-b.val);
    for(let i=0;i<len;i++){
        if(i>0&&cache[i].val !== cache[i-1].val){ rank++;}
        result[cache[i].index] = rank;
    }
    console.log(cache,result);
    return result;
};
console.log(arrayRankTransform([40,10,20,30]));