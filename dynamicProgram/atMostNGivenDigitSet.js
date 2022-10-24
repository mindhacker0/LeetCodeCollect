//902. 最大为 N 的数字组合
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
*/
var atMostNGivenDigitSet = function(digits, n) {//暴力
    let len = 0,k=n;
    while(k){k=~~(k/10);len++;}
    let count = new Set;
    console.log(len);
    function trace(index,num){
        if(num>n) return;//大于目标数字
        else{count.add(num);}
        if(index>=len){//搜索完成
            return;
        }
        trace(index+1,num);//什么都不选
        for(let i=0;i<digits.length;i++){//选一个数字
            num=num*10+digits[i]*1;
            trace(index+1,num);
            num = ~~(num/10);
        }
    }
    trace(0,0);
    return count.size-1;//排除0的结果
};
var atMostNGivenDigitSet = function(digits, n) {//动规，考虑数位
    let arr = n.toString().split("");
    let len = arr.length;
    let dp = new Array(len).fill(-1);
    function trace(index,islimit,isNum){//trace(index,count)表示digits组成n%(10**(index-1))的正整数个数
        if(index === len){return isNum;}
        if(!islimit&&isNum&&dp[index]!==-1) return dp[index];
        let res = 0;
        if(!isNum) res = trace(index+1,false,false);
        let up = islimit?arr[index]:9;
        for(let i=0;i<digits.length;i++){
            if(digits[i]*1>up) continue;
            res+=trace(index+1,islimit&&(digits[i]*1===up),true);
        }
        if(!islimit) console.log(index,isNum,res);
        if(!islimit && isNum) dp[index] = res;
        return res;
    }
    return trace(0,true,false);
}
console.log(atMostNGivenDigitSet(["1","3","5","7"],100));//20
// console.log(atMostNGivenDigitSet(["1","4","9"],1000000000));//29523
//console.log(atMostNGivenDigitSet(["1","2","3","4","6","7","8","9"],10000000));
console.log(atMostNGivenDigitSet(["1","2","3","4","6","7","8","9"],67688637));//12255070