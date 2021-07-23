/**
 * @param {string} s
 * @param {number} n
 * @return {string}
*/
var reverseLeftWords = function(s, n) {
    let total = "";
    let regExp = new RegExp(`([\\s\\S]{${n}})([\\s\\S]+)`,"g");
    s.replace(regExp,function(str,b,c){
        total = c+b
    });
    return total;
};
console.log(reverseLeftWords("abcdefg",2));