//1781. 所有子字符串美丽值之和
/**
 * @param {string} s
 * @return {number}
*/
var beautySum = function(s) {//暴力 30.77%
    let len = s.length;
    let beauti = 0;
    for(let i=0;i<len;i++){
        for(let j=i;j<len;j++){
            let map = new Array(26).fill(0);
            for(let l=i;l<=j;l++){
                map[s.charCodeAt(l)-97]++;
            }
            let min = Infinity,max = -Infinity;
            for(let k=0;k<26;k++){
                if(map[k]!==0){
                    min = Math.min(min,map[k]);
                    max = Math.max(max,map[k]);
                } 
            }
            //console.log(i,j,max-min);
            beauti+=max-min;
        }
    }
    return beauti;
};
var beautySum = function(s) {//分块 34.48%
    let len = s.length;
    let beauti = 0;
    let blockSize = Math.ceil(Math.sqrt(len));//每块的大小根号len
    let blockCache = new Array(Math.ceil(len/blockSize)).fill(-1).map(()=>new Array(26).fill(0));//缓存每块的个数统计
    function getIndex(x){return Math.floor(x/blockSize);}
    //计算每块的统计数
    for(let i in s){
        blockCache[getIndex(i)][s.charCodeAt(i)-97]++;
    }
    console.log(blockCache);
    function query(l,r){
        let ans = new Array(26).fill(0);
        if(getIndex(l)===getIndex(r)){//在同一个块内
            for(let i=l;i<=r;i++) ans[s.charCodeAt(i)-97]++;
        }else{
            let start = l,end = r;
            while(getIndex(l)===getIndex(start)){ ans[s.charCodeAt(l)-97]++;l++;}
            while(getIndex(r)===getIndex(end)){ ans[s.charCodeAt(r)-97]++;r--;}
            for(let k=getIndex(l);k<=getIndex(r);k++){
                for(let i=0;i<26;i++){
                    ans[i]+=blockCache[k][i];
                }
            }
        }
        return ans;
    }
    for(let i=0;i<len;i++){
        for(let j=i;j<len;j++){
            let arr = query(i,j);
            let min = Infinity,max = -Infinity;
            for(let k=0;k<26;k++){
                if(arr[k]!==0){
                    min = Math.min(min,arr[k]);
                    max = Math.max(max,arr[k]);
                } 
            }
            //console.log(i,j,max-min);
            beauti+=max-min;
        }
    }
    return beauti;
}
console.log(beautySum("aabcb"));//5
console.log(beautySum("aabcbaa"));