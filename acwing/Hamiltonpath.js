//91. 最短Hamilton路径
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = []
rl.on('line',function(line){
    input.push(line.split(' '));
});
// rl.on('close',function(){//状态压缩
//     //console.log(input);
//     let border = input[0][0]*1;
//     let graph = new Array(border).fill(0).map(()=>new Array(border));
//     for(let i=1;i<=border;i++){
//         for(let j=0;j<border;j++){
//             graph[i-1][j] = input[i][j]*1;
//         }
//     }
//     let f=[];
//     for(let n=0;n<(1<<border);n++){//状态枚举
//         if(typeof f[n]==="undefined") f[n] = new Array(border).fill(Infinity);
//         for(let j=0;j<border;j++){//当前位置
//             if(n===1&&j===0) f[n][j] = 0;
//             if(n&(1<<j)){//位置和状态匹配
//                 for(let k=0;k<border;k++){//枚举上一个位置
//                     if(n&(1<<k)){//上一个位置也要和状态匹配
//                         f[n][j] = Math.min(f[n][j],f[n^(1<<j)][k]+graph[k][j]);
//                     }
//                 }
//             }
//         }
//     }
//     console.log(f[(1<<border)-1][border-1])
// });
function swap(arr,x,y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
rl.on('close',function(){//模拟退火
    let border = input[0][0]*1;
    let path = new Array(border).fill(0);
    let graph = new Array(border).fill(0).map(()=>new Array(border));
    for(let i=1;i<=border;i++){
        for(let j=0;j<border;j++){
            graph[i-1][j] = input[i][j]*1;
        }
    }
    let t = 1000,end = 10e-4,dec = 0.99;//初始温度，平衡温度，衰减系数
    let k = 1000;//每个温度迭代次数,马尔科夫迭代次数
    for(let i=0;i<border;i++) path[i] = i;//初始化填充路径
    let ans = calc();
    for(let i=0;i<k;i++){
        let arr = [];
        for(let o=1;o<border-1;o++) arr.push(o);
        arr.sort(()=>Math.random()-0.5)
        path[0]=0;path[border-1] = border-1;
        for(let o=0;o<border-2;o++) path[o+1] = arr[o];
        for(let x = t;x>end;x*=dec){
            let pre = calc();//扰动前动能
            let m = 1+Math.floor(Math.random()*(border-2));
            let n = 1+Math.floor(Math.random()*(border-2));
            swap(path,m,n);
            let cur = calc();//当前动能
            let delta = cur - pre;
            if(delta>=0 && Math.exp(-delta/x)<=Math.random()) swap(path,m,n);//温度升高以一定概率恢复
            ans = Math.min(ans,cur);
        }
    }
    console.log(ans);
    function calc(){//估值函数，根据路径估值
        let len = 0;
        let start = 0;
        for(let i=1;i<path.length;i++){
            len+=graph[start][path[i]];
            start = path[i];
        }
        return len;
    }
});