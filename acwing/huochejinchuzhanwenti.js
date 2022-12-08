//130. 火车进出栈问题
const { emit } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = []
rl.on('line',function(line){
    input.push(line.split(' '));
});

// rl.on('close',function(){//暴力搜索
//     let num = input[0][0];
//     let times = 0;
//     function search(index,count){
//         if(index==2*num){
//             console.log(count);
//             times+=count===0;
//             return;
//         }
//         if(count<num) search(index+1,count+1);
//         if(count>0) search(index+1,count-1);
//     }
//     search(0,0);
//     console.log(times);
// });
// rl.on('close',function(){//递推
//     let num = input[0][0]*1;
//     let cache = new Array(num+1).fill(-1);
//     function subStack(n){
//         if(n<=1) return 1n;
//         if(cache[n]!==-1) return cache[n];
//         let ans = 0n;
//         for(let k=1;k<=n;k++){
//             ans+=subStack(k-1)*subStack(n-k);
//         }
//         cache[n] = ans;
//         return ans;
//     }
//     console.log(subStack(num));
// });
// rl.on('close',function(){//动态规划
//     let num = input[0][0]*1;
//     let dp = [];//dp[i][j]表示i个元素未入栈，栈中有j个元素
//     for(let i=0;i<=num;i++){
//         dp[i] = [];
//         for(let j=0;j<=num-i;j++){
//             if(i===0&&j===0) dp[i][j] = 1n;
//             else  dp[i][j] = (i===0?0n:dp[i-1][j+1])+(j===0?0n:dp[i][j-1]);
//         }
//     }
//     console.log(dp[num][0]);
// });
rl.on('close',function(){//卡特兰数
    let num = input[0][0]*1;
    let ans = 1n;
    for(let i=2*num;i>num;i--){
       ans*=BigInt(i);
       ans/=BigInt(i-num);
    }
    ans/=BigInt(num+1);
    console.log(ans);
});