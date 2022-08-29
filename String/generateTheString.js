//1374. 生成每种字符都是奇数个的字符串
/**
 * @param {number} n
 * @return {string}
*/
var generateTheString = function(n) {
    let str = '',mid = n,start = 97;
    for(let i=0;i<n;i++){
        if(n%2===0&&i===n-1) start++;
        str+=String.fromCharCode(start);
    }
    return str;
};
console.log(generateTheString(6));