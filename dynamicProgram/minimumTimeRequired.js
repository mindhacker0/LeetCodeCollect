//1723. 完成所有工作的最短时间
/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
*/
var minimumTimeRequired = function(jobs, k) {//暴力搜索超时
   let len = jobs.length;
   let timeArr = new Array(k).fill(0);
   let ans = Infinity;
   function search(index,used,max){
        if(max>=ans) return;
        if(index===len){
            ans = Math.min(ans,max);
            return;
        }
        if(used<k){
            timeArr[used]+=jobs[index];
            search(index+1,used+1,Math.max(max,timeArr[used]));
            timeArr[used]-=jobs[index];
        }
        for(let i=0;i<k;i++){
            if(timeArr[i]+jobs[index]>=ans) continue;//剪枝比当前选择差的方案
            timeArr[i]+=jobs[index];
            search(index+1,used+1,Math.max(max,timeArr[i]));
            timeArr[i]-=jobs[index];
        }
   }
   search(0,0,0);
   return ans;
};
var minimumTimeRequired = function(jobs, k) {//动态规划
    let dp = [];//dp[i][j]表示把第i个工作分配给第j个工人的最小化工作时间 dp[i][j] = 
    let len = jobs.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<k;j++){

        }
    }
}
var minimumTimeRequired = function(jobs, k) {//随机化算法退火算法、爬山算法、遗传算法
    let len = jobs.length;
    let hi = 1000,lo = 10e-4,dec = 0.98;//初始温度(最高温度)，平衡温度(最低温度)，温度衰减系数
    let times = 100;//每个温度迭代次数
    let work = new Array(k).fill(0);
    let ans = Infinity;
    function swap(arr,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function evalue(){//评估扰动后的最大时间最小值
        Array.prototype.fill.call(work,0);
        let max = 0;
        for(let i=0;i<len;i++){
            let idx = 0,min = work[idx];
            for(let j=0;j<k;j++){
                if(work[j]<min){
                    min = work[j];
                    idx = j;
                }
            }
            work[idx]+=jobs[i];//分配给当前时间最少的工人
            max = Math.max(max,work[idx]);
        }
        ans = Math.min(ans,max);
        return max;
    }
    for(let t=hi;t>lo;t*=dec){//温度下降
        for(let s=0;s<times;s++){//每个温度进行迭代
            jobs.sort(()=>Math.random()-0.5);
            let pre = evalue();
            let x = Math.floor(Math.random()*len);
            let y = Math.floor(Math.random()*len);
            swap(jobs,x,y);
            let cur = evalue();
            let delta = cur-pre;//收益 cur小于pre说明内能更低，接近答案
            if(delta>=0 && Math.exp(-delta/t)<=Math.random()) swap(jobs,x,y);//温度升高，以一定概率恢复现场
        }
    }
    return ans;
}
//console.log(minimumTimeRequired([1,2,4,7,8],2));
//console.log(minimumTimeRequired([9899456,8291115,9477657,9288480,5146275,7697968,8573153,3582365,3758448,9881935,2420271,4542202],9));
console.log(minimumTimeRequired([256,250,255,250,254,255,260,260,250,252,257,253],9));