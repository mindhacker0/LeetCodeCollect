//473. 火柴拼正方形
/**
 * @param {number[]} matchsticks
 * @return {boolean}
*/
var makesquare = function(matchsticks) {//5.06%
    let sum = 0;
    let len = matchsticks.length;
    if(len<4) return false;//小于4个无法拼成四边形
    for(let i=0;i<len;i++){
        sum+=matchsticks[i];
    }
    console.log(sum);
    if(sum%4!==0) return false;//不能被4平分的也不能拼
    let candidate = [];
    function dfs(index,path,total,arr){//选或者不选择某个元素加入集合
        if(total===(sum/4)){
            candidate.push(path);
            return;
        } 
        if(index === len){
            //console.log(path);
            return;
        }
        path = path|(1<<index);
        total+=matchsticks[index];
        arr.push(index);
        dfs(index+1,path,total,arr);
        arr.pop();
        total-=matchsticks[index];
        path = path&(~(1<<index));
        dfs(index+1,path,total,arr);
    }
    dfs(0,0,0,[]);
    console.log("candidate",candidate);
    let stack = [];
    stack.push([0,0,0]);
    while(stack.length){
        let [index,add,selected] = stack.pop();
        if(selected===4){
            console.log(add);
            if(add === (2**(len)-1)) return true;
            continue;
        }
        if(index<candidate.length){
            let a = add,b = candidate[index],repeat = false;
            while(a>0&&b>0){
                if((a&1)&&(b&1)){
                    repeat = true;
                    break;
                }
                a=a>>1;b=b>>1;
            }
            if(!repeat) stack.push([index+1,add|candidate[index],selected+1]);
            stack.push([index+1,add,selected]);
        }
    }
    return false;
};
var makesquare = function(matchsticks) {//12.18%
    let sum = 0;
    let len = matchsticks.length;
    if(len<4) return false;//小于4个无法拼成四边形
    for(let i=0;i<len;i++){
        sum+=matchsticks[i];
    }
    if(sum%4!==0) return false;//不能被4平分的也不能拼
    matchsticks.sort((a,b)=>b-a);
    let edgeLen = sum/4;
    if(matchsticks[0]>edgeLen) return false;
    let edges = new Array(4).fill(0);
    // console.log(matchsticks);
    let ans = false;
    function dfs(index,edge){
        if(index === len||ans){
            // console.log(index);
            ans = true;
            return true;
        }
        for(let i=0;i<4;i++){
            edge[i]+=matchsticks[index];
            if(edge[i]<=edgeLen){
                dfs(index+1,edge);
            }
            edge[i]-=matchsticks[index];
        }
        return false;
    }
    dfs(0,edges);
    return ans;
}
var makesquare = function(matchsticks) {
    let sum = 0;
    let len = matchsticks.length;
    if(len<4) return false;//小于4个无法拼成四边形
    for(let i=0;i<len;i++){
        sum+=matchsticks[i];
    }
    if(sum%4!==0) return false;//不能被4平分的也不能拼
    let edgeLen = sum/4;
    let dp = new Array(1<<len).fill(-1);
    dp[0] = 0;
    for(let s=1;s<(1<<len);s++){//len根火柴总共的二进制排列方式穷举
        for(let k=0;k<len;k++){
            if(s&(1<<k) === 0) continue;
            const pre = s&(~(1<<k));
            if(dp[pre]>=0 && dp[pre]+matchsticks[k]<=edgeLen){
                dp[s] = (dp[pre]+matchsticks[k])%edgeLen;
                break;
            }
        }
    }
    console.log(dp);
    return dp[(1<<len)-1]===0;
}
// console.log(makesquare([1,1,2,2,2]));
console.log(makesquare([3,3,3,3,4]));
// console.log(makesquare([6,6,6,6,4,2,2]));//false
// console.log(makesquare([3,3,2,2,2,2,2,2,2,2,2,2,2,2,2]));//false