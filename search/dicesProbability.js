//剑指 Offer 60. n个骰子的点数
/**
 * @param {number} n
 * @return {number[]}
*/
var dicesProbability = function(n) {//回溯
    let map = new Map;
    function trace(index,sum){
        if(index===n){
            //console.log(path);
            let val = map.get(sum);
            if(typeof val === "undefined") val = 0;
            val++;
            map.set(sum,val);
            return;
        }
        for(let i=1;i<=6;i++){
            sum+=i;
            trace(index+1,sum);
            sum-=i;
        }
    }
    trace(0,0);
    let ans = [];
    let base = 6**n;
    map.forEach((val)=>{
        ans.push((val/base).toFixed(5));
    });
    //console.log(map);
    return ans;
};
var dicesProbability = function(n) {//动规
    let dp = new Array(6).fill(1/6);
    for(let i=2;i<=n;i++){
        let temp = new Array(5*i+1).fill(0);
        for(let j=0;j<dp.length;j++){
            for(let k=0;k<6;k++){
                temp[j+k]+=dp[j]/6;
            }
        }
        dp = temp;
    }
    return dp;
}
console.log(dicesProbability(2));