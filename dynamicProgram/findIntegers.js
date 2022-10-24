//600. 不含连续1的非负整数
/**
 * @param {number} n
 * @return {number}
*/
var findIntegers = function(n) {//数位DP+剪枝
    let arr = [],k=n;
    while(k){arr.unshift(k&1);k=k>>1;}
    let len = arr.length;
    let dp = new Array(len).fill(false).map(()=>{return new Array(2).fill(-1);});//剪枝
    function numFn(index,isNum,isLead,isLimit,prev){
        if(index===len){
            return 1;
        }
        if(!isLimit && dp[index][prev]!==-1) return dp[index][prev];
        let res = 0;
        let up = isLimit?arr[index]:1;
        for(let i=0;i<=up;i++){
            if(i===1 && i===prev) continue;
            res+=numFn(index+1,isNum,isLead,isLimit&&(i===arr[index]),i);
        }
        if(!isLimit) dp[index][prev] = res;
        return res;
    }
    return numFn(0,false,false,true,0);
};
console.log(findIntegers(5));//5
