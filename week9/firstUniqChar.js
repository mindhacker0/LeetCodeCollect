//387. 字符串中的第一个唯一字符
/**
 * @param {string} s
 * @return {character}
*/
var firstUniqChar = function(s) {
    let map = {};
    for(var m of s){
        map[m] = (map[m]||0) + 1;
    }
    for(var i in map){
        if(map[i]===1) return i;
    }
    return " "
};
console.log(firstUniqChar("abaccdeff"));