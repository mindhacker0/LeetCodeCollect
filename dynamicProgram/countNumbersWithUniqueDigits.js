//357. 统计各位数字都不同的数字个数
/**
 * @param {number} n
 * @return {number}
*/
var countNumbersWithUniqueDigits = function(n) {//暴力
    let dp = new Array(n).fill(false).map(()=>{return new Array(10).fill(-1);});
    function trace(index,isNum,islead,used){
        if(islead) return 0;
        if(index === n){
            return 1;
        }
        if(dp[index][used.size]!==-1 && isNum) return dp[index][used.size];
        let res = 0;
        if(!isNum) res = trace(index+1,false,islead,used);
        for(let i=0;i<=9;i++){
            if(used.has(i)) continue;
            used.add(i);
            res+=trace(index+1,true,used.size===1 && used.has(0),used);
            used.delete(i);
        }
        if(isNum) dp[index][used.size] = res;
        return res;
    }
    return trace(0,false,false,new Set)
};
console.log(countNumbersWithUniqueDigits(1))//10
console.log(countNumbersWithUniqueDigits(2))//91
console.log(countNumbersWithUniqueDigits(3))//739