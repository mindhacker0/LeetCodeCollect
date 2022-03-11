//242. 有效的字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    function makeMap(str){
        let map = {};
        for(let i of str){
           map[i]=(map[i]||0)+1;
        }
        return map;
    }
    let mp = makeMap(s);
    let mp1 = makeMap(t);
    for(var s in mp){
        if(mp1[s]!==mp[s]) return false;
    }
    return true;
};
console.log(isAnagram("anagram","nagaram"));