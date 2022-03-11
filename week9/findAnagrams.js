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
console.log(findAnagrams("cbaebabacd","abc"))