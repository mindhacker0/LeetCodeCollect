//709. 转换成小写字母
/**
 * @param {string} s
 * @return {string}
*/
var toLowerCase = function(s) {
    let str = ""
    for(let i in s){
        let code = s.charCodeAt(i);
        if(code>=65 && code<=90) str += String.fromCharCode(code+32);
        else str+=s[i];
    }
    return str;
};
console.log(toLowerCase('LOVELy'));