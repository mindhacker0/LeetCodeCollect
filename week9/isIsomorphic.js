//205. 同构字符串
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let makePattern = function(str){
        let pattern = [];
        let map = {};
        for(var i in str){
            if(map[str[i]]) pattern.push(map[str[i]])
            else pattern.push(-1);
            map[str[i]] = i;
        }
        return pattern;
    };
    let p1 = makePattern(s);
    let p2 = makePattern(t);
    for(var i in p1){
        if(p1[i]!==p2[i]) return false;
    }
    return true;
};
console.log(isIsomorphic("bcbd","baba"));