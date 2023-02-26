//1815. 得到新鲜甜甜圈的最多组数
/**
 * @param {number} batchSize
 * @param {number[]} groups
 * @return {number}
 */
var maxHappyGroups = function(batchSize, groups) {
    //groups分组，尽可能多的组，使得每个组都能被batchSize整除
    let ans = 0,remain = [];
    for(let i=0;i<groups.length;++i){
        let x = groups[i]%batchSize;
        if(x === 0) ++ans;
        else remain.push(x);
    }
    console.log(remain);
    //对余下的进行全排列尝试分组
    let visit = new Array(remain.length).fill(0);
    let max = -1;
    function arrange(index,sum,count){
        if(index === remain.length){
            console.log(index,count);
            max = Math.max(max,count);
            return;
        }
        if(sum!==0 && sum%batchSize === 0) count++; 
        for(let i=0;i<remain.length;++i){
            if(visit[i]) continue;
            visit[i] = 1;
            sum+=remain[i];
            arrange(index+1,sum,count);
            sum-=remain[i];
            visit[i] = 0;
        }
    }
    arrange(0,0,0);
    //console.log(max);
    return ans+max+1;
};
// console.log(maxHappyGroups(3,[1,2,3,4,5,6]))
// console.log(maxHappyGroups(4,[1,3,2,5,2,2,1,6]))
console.log(maxHappyGroups(2,[379325247,492988939,976842009,289136635,707826513,588406555,653849523,783187488,6130129,411983602,841443399,920142114,880990039,951528078,795109486,550292615,868807355,138780516,556926567]))