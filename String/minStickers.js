//691. 贴纸拼词
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
*/
var minStickers = function(stickers, target) {//dfs
    let len = stickers.length;
    let pairMap = new Array(len);
    let totalMap = Array(26).fill(0);
    for(let i=0;i<len;i++){
        pairMap[i] = new Array(26).fill(0);
        for(let k of stickers[i]){
            pairMap[i][k.charCodeAt(0)-97]++;
            totalMap[k.charCodeAt(0)-97]++;
        }
    }
    for(let i=0;i<target.length;i++){//快速过滤无法拼的情况
        if(totalMap[target.charCodeAt(i)-97]===0) return -1;
    }
    let result = 10e7;
    function dfs(index,take,total){//take已有的单词块
        if(total>result) return;
        if(index>=target.length){
            //console.log(total,arr);
            result = Math.min(result,total);
            return;
        }
        let code = target.charCodeAt(index)-97;
        if(take[code]>0){//可以从之前选择的单词获取该字母
            //console.log("before",target[index]);
            take[code]--;
            dfs(index+1,take,total);
            take[code]++;
            return;
        }
        for(let i=0;i<len;i++){
            if(pairMap[i][code]>0){
                for(let j=0;j<26;j++){
                    take[j]+=pairMap[i][j];
                }
                take[code]--;
                //arr.push(stickers[i]);
                dfs(index+1,take,total+1);
                //arr.pop();
                take[code]++;
                for(let j=0;j<26;j++){
                    take[j]-=pairMap[i][j];
                }
            }
        }
    }
    dfs(0,new Array(26).fill(0),0);
    //console.log(global,pairMap)
    return result===10e7?-1:result;
};
var minStickers = function(stickers, target) {
    const m = target.length;
    const memo = new Array(1 << m).fill(-1);
    memo[0] = 0;
    const res = dp(stickers, target, memo, (1 << m) - 1);
    return res <= m ? res : -1;
};
const dp = (stickers, target, memo, mask) => {
    const m = target.length;
    if (memo[mask] < 0) {
        let res = m + 1;
        for (const sticker of stickers) {
            let left = mask;
            const cnt = new Array(26).fill(0);
            for (let i = 0; i < sticker.length; i++) {
                cnt[sticker[i].charCodeAt() - 'a'.charCodeAt()]++;
            }
            for (let i = 0; i < target.length; i++) {
                const c = target[i];
                if (((mask >> i) & 1) === 1 && cnt[c.charCodeAt() - 'a'.charCodeAt()] > 0) {
                    cnt[c.charCodeAt() - 'a'.charCodeAt()]--;
                    left ^= 1 << i;
                    console.log(c)
                }
            }
            console.log(left)
            if (left < mask) {
                res = Math.min(res, dp(stickers, target, memo, left) + 1);
            }
        }
        memo[mask] = res;
    }
    return memo[mask];
}

console.log(minStickers(["with","example","science"],"thehat"));//3
// console.log(minStickers(["notice","possible"], "basicbasic"));//-1
// console.log(minStickers(["feed","industry","let","pair","milk","hope"],"likehuman"));//4
// console.log(minStickers(["soil","energy","share","single","paper","done","ready","home","cold","fine","happen","unit","out","even","huge","slow","pattern","caught","next","how","state","music","grand","fish","match","happy","wheel","good","cow","water","blood","fall","friend","those","dry","great","name","organ","wife","clear","work","dog","element","magnet","collect","store","the","dream","talk","once"]
// ,"dealplan"));//3
// console.log(minStickers(["wear", "oh", "wheel", "famous", "observe", "dictionary", "bought", "salt", "stop", "pretty", "result", "hour", "great", "me", "dollar", "valley", "bear", "table", "slow", "before", "fall", "kept", "charge", "excite", "page", "degree", "present", "talk", "help", "held", "happy", "and", "hope", "beauty", "be", "stead", "car", "now", "them", "trip", "season", "condition", "excite", "history", "page", "again", "silver"]
// ,"nmgoodlodlzt"));
