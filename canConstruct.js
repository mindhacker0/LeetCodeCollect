/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map;
    for(let i of magazine){
        map.set(i,(map.get(i)||0)+1);
    }
    for(let i of ransomNote){
        if(!map.get(i) || map.get(i)<=0) return false;
        map.set(i,map.get(i)-1);
    }
    return true;
};
console.log(canConstruct('aa','ab'));