//233. 数字 1 的个数
/**
 * @param {number} n
 * @return {number}
*/
var countDigitOne = function(n) {//统计1在每个位置出现的次数
    let arr = n.toString().split("");
    let prefix = 0,suffix = ~~(n/10);
    let sumArr = [[suffix,prefix]];
    for(let j=arr.length-2;j>=0;j--){
        prefix = arr[j+1]*(j<=arr.length-3?10**(arr.length-j-2):1)+prefix;
        suffix = ~~(suffix/10);
        sumArr.unshift([suffix,prefix]);
    }
    console.log(sumArr);
    let muti = 1;
    let count = 0;
    for(let i=arr.length-1;i>=0;i--){
        let [suffix,prefix] = sumArr[i];
        count+=suffix*muti;
        if(arr[i]==1) count+=(prefix+1);
        else if(arr[i]>1) count+=muti;
        muti*=10;
    }
    return count;
};
var countDigitOne = function(n) {//数位DP模板
    let arr = n.toString().split("");
    let len = arr.length;
    let dp = new Array(len).fill(0).map(()=>{return new Array(len).fill(-1)});//dp用来记忆化剪枝dp[index][count]统计第index位中1的个数,如果已经统计完成可以记忆化
    function trace(index,count,islimt){//trace()表示n%(10**(i+1))中1的总数  
        if(index===arr.length){
            return count;
        }
        if(!islimt) console.log(index,count,dp[index][count])
        if(!islimt && dp[index][count]!==-1) return dp[index][count];
        let up = islimt?arr[index]*1:9;
        let res = 0;
        for(let i=0;i<=up;i++){
            res+=trace(index+1,count+(i===1),islimt && (i===up));
        }
        if(!islimt) dp[index][count]=res;
        return res;
    }
    return trace(0,0,true);
}
// console.log(countDigitOne(13));//6
// console.log(countDigitOne(101));//23
console.log(countDigitOne(666));//237
// console.log(countDigitOne(1111));//448
// console.log(countDigitOne(999999999));