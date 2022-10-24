//438. 找到字符串中所有字母异位词
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let arr = new Array(26).fill(0);
    let ans = [];
    for(let i in p){
        arr[p[i].charCodeAt(0) - 97]++;
    }
    let str = arr.toString();
    for(let j=0;j<s.length;j++){
        if(arr[s[j].charCodeAt(0) - 97]>0){
            let match = new Array(26).fill(0);
            for(let i=0;i<p.length && (j+i)<s.length;i++){
                match[s[j+i].charCodeAt(0) - 97]++;
            }
            if(str === match.toString()){
                ans.push(j);
            }
        }
    }
    return ans;
};
var findAnagrams = function(s, p) {//滑动窗口
    let left = 0,right= p.length-1;
    let key = new Array(26).fill(0);
    let wid = new Array(26).fill(0),ans = [];
    for(let i=left;i<=right;i++){
        key[p.charCodeAt(i)-97]++;
        wid[s.charCodeAt(i)-97]++;
    }
    if(key.join()===wid.join()) ans.push(0);
    for(let i=0;i<s.length-p.length;i++){
        wid[s.charCodeAt(i)-97]--;
        wid[s.charCodeAt(i+p.length)-97]++;
        let match = true;
        //console.log(wid);
        for(let j=0;j<key.length;j++){
            if(typeof key[j] === "undefined") continue;
            if(key[j]!==wid[j]){match = false;break;}
        }
        if(match) ans.push(i+1);
    }
    return ans;
};
var findAnagrams = function(s, p) {//滑动窗口优化
    let ans = [];
    if(p.length>s.length) return ans;
    let key = new Array(26).fill(0);
    let kind = 0;
    for(let i in p) key[p.charCodeAt(i)-97]++;
    for(let i=0;i<26;i++) kind+=key[i]!==0;
    console.log(kind);
    let diff = 0;
    for(let i=0;i<s.length;i++){
        key[s.charCodeAt(i)-97]--;
        if(key[s.charCodeAt(i)-97]===0) diff++;
        if(i>=p.length) key[s.charCodeAt(i-p.length)-97]++;
        if(key[s.charCodeAt(i-p.length)-97]===1) diff--;
        if(diff === kind) ans.push(i-p.length+1);
    }
    return ans;
}
console.log(findAnagrams("cbaebabacd","abc"))