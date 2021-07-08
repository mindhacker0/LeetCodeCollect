/**
* @param {number[]} deliciousness
* @return {number}
*/
var countPairs = function(deliciousness) {
    let hash = {};
    let len = 0;
    for(var i = 0;i<deliciousness.length;i++){
        let val = deliciousness[i];
        for(var sum = 1,times = 0;times<=21;times++){
            let count = hash[sum-val] || 0;
            if(hash[sum-val]) console.log(val,sum-val);
            len=(count+len)%(Math.pow(10,9)+7);
            sum<<=1;
        }
        hash[val] = (hash[val]||0)+1;
    }
    return len;
};
console.log(countPairs([1048576,1048576]));