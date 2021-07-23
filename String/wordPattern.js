/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
*/
var wordPattern = function(pattern, s) {
    if(pattern.length !== s.split(" ").length) return false;
    function makeMap(str){
        let map = {};
        for(let i in str){
           map[str[i]]=(map[str[i]]||"")+i;
        }
        return map;
    }
    let mp = makeMap(pattern);
    let mp1 = makeMap(s.split(" "));
    console.log(mp,mp1)
    for(let i in mp){
        let isEqual = false;
        for(let j in mp1){
            if(mp[i]===mp1[j]){isEqual = true;}
        }
        if(!isEqual) return false;
    }
    return true;
};
console.log(wordPattern("abba","dog cat cat dog"))