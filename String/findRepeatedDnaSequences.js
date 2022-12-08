//187. 重复的DNA序列
/**
 * @param {string} s
 * @return {string[]}
*/
var findRepeatedDnaSequences = function(s) {
    let ans = new Set;
    let len = s.length;
    if(len<=10) return Array.from(ans);
    let seq = [];
    let prefix = new Set;
    for(let i=0;i<len;i++){
        if(seq.length<10){
            seq.push(s[i]);
            if(seq.length === 10) prefix.add(seq.join(""));
        }else{
            seq.shift();
            seq.push(s[i]);
            let fix = seq.join("");
            if(prefix.has(fix)){
                ans.add(fix);
            }
            prefix.add(fix);
        }
    }
    console.log(prefix);
    return Array.from(ans);
};
var findRepeatedDnaSequences = function(s) {//位运算压缩
    let len = s.length;
    let ans = new Set;
    if(len<=10) return Array.from(ans);
    let numMap = {A:0,C:1,G:2,T:3};
    let x = 0;
    let prefix = new Set;
    for(let i=0;i<10;i++){
        x = (x<<2)|numMap[s[i]];
    }
    prefix.add(x);
    console.log(x)
    for(let i=10;i<len;i++){
        x = x&0x3ffff;
        x = (x<<2);
        x = x|numMap[s[i]];
        if(prefix.has(x)){
            ans.add(s.slice(i-9,i+1));
        }
        prefix.add(x);
        if(i===19) console.log(x,s.slice(i-9,i+1))
    }
    return Array.from(ans);
}
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));