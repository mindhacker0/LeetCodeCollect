//808. Soup Servings
/**
 * @param {number} n
 * @return {number}
*/
var soupServings = function(n) {//dfs
    let soup = [n,n];
    let type = [
        [100,0],
        [75,25],
        [50,50],
        [25,75]
    ];
    function serve([a,b]){
        if(a<=0){
            if(b<=0) return 0.5;
            return 1;
        }
        if(b<=0) return 0;
        let rate = 0;
        for(let i=0;i<4;i++){
            rate+=serve([a-type[i][0],b-type[i][1]]);
        }
        return 0.25*rate;
    }
    return serve(soup);
};
var soupServings = function(n) {//dfs（记忆化）
    if(n>10000) return 0.99999;
    let type = [
        [100,0],
        [75,25],
        [50,50],
        [25,75]
    ];
    let ansmap = new Map;
    function serve(a,b){
        if(typeof ansmap.get(`${a}|${b}`)!=="undefined") return ansmap.get(`${a}|${b}`);
        if(a<=0){
            if(b<=0) return 0.5;
            return 1;
        }
        if(b<=0) return 0;
        let rate = 0;
        for(let i=0;i<4;i++){
            rate+=0.25*serve(a-type[i][0],b-type[i][1]);
        }
        rate=rate.toFixed(5);
        ansmap.set(`${a}|${b}`,rate);
        return rate;
    }
    return serve(n,n);
};
var soupServings = function(n) {//dp
    if(n>4500) return 0.99999;
    let dp = [];//dp[i][j]表示a存在i份，b存在j份时的概率
    let dos = Math.ceil(n/25);
    let type = [
        [4,0],
        [3,1],
        [2,2],
        [1,3]
    ];
    for(let i=0;i<=dos;i++){
        dp[i] = [];
        for(let j=0;j<=dos;j++){
            if(i===0&&j===0) dp[i][j] = 0.5;
            else if(i===0){
                dp[i][j] = 1;
            }else if(j===0){
                dp[i][j] = 0
            }else{
                dp[i][j] = 0;
                for(let k=0;k<4;k++) 
                dp[i][j] += 0.25 * dp[Math.max(0,i-type[k][0])][Math.max(0,j-type[k][1])];                
            }
        }
    }
    console.log(dp);
    return dp[dos][dos];
}
console.log(soupServings(100));