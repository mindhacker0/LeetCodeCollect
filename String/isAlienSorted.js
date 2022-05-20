/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
*/
var isAlienSorted = function(words, order) {
    let seq = new Array(26).fill(0);
    for(let i=0;i<order.length;i++){
        seq[order.charCodeAt(i)-97] = i;
    }
    for(let i=1;i<words.length;i++){
        let len = Math.min(words[i-1].length,words[i].length);
        let equal = true;
        for(let k=0;k<len;k++){
            if(seq[words[i-1].charCodeAt(k)-97]===seq[words[i].charCodeAt(k)-97]){continue;}
            equal = false;
            if(seq[words[i-1].charCodeAt(k)-97]<seq[words[i].charCodeAt(k)-97]){//可以通过
                break;
            }
            if(seq[words[i-1].charCodeAt(k)-97]>seq[words[i].charCodeAt(k)-97]){//不可以通过
                return false;
            }
        }
        if(equal && words[i-1].length!==len) return false;
    }
    return true;
};
//console.log(isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["kuvp","q"],"ngxlkthsjuoqcpavbfdermiywz"));