// 题目描述
// 从一个长度为N的正数数组numbers中找出长度至少为L且几何平均值最大子数组，并输出其位置和大小。（K个数的几何平均值为K个数的乘积的K次方根）
// 若有多个子数组的几何平均值均为最大值，则输出长度最小的子数组。
// 若有多个长度相同的子数组的几何平均值均为最大值，则输出最前面的子数组。
// 输入描述
// 第一行输入为N、L
// N表示numbers的大小（1 ≤ N ≤ 100000）
// L表示子数组的最小长度（1 ≤ L ≤ N）
// 之后N行表示numbers中的N个数，每个一行（10^-9 ≤ numbers[i] ≤ 10^9）
// 输出描述
// 输出子数组的位置（从0开始计数）和大小，中间用一个空格隔开。
// 备注
// 用例保证除几何平均值为最大值的子数组外，其他子数组的几何平均值至少比最大值小10^-10倍
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let linecount = 0;
let n,l;
const arr = [];
rl.on("line",(line)=>{
    if(linecount === 0){
        [n,l] = line.split(" ").map(v=>parseInt(v));
    }else{
        arr.push(+(line));
        if(linecount === n) rl.close();
    }
    linecount++;
});
rl.on("close",()=>{
    let muti = [];
    let max = -Infinity;
    let k,t;
    for(let i=0;i<n;++i){
        muti[i] = [];
        for(let j=i;j<n;++j){
            if(i === j) muti[i][j] = arr[i];
            else muti[i][j] = muti[i][j-1]*arr[j];
            if((j-i+1)>=l){
                const num = Math.pow(muti[i][j],1/(j-i+1));
                if(max === -Infinity || num - max > Number.EPSILON || (num === max && (j-i+1)<t)){ k = i;t = j-i+1;max = num;  }
            }
        }
    }
    console.log(k,t);
});