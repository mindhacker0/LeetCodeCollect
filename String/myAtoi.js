//8. 字符串转换整数 (atoi)
/**
 * @param {string} s
 * @return {number}
*/
var myAtoi = function(s) {
    let len = s.length;
    let index = 0
    while(index<len && s[index] === ' ') index++;
    let sign = s[index] === "-"?-1:1;
    let val = 0;
    if(s[index] === "-" || s[index] === "+")  index++;
    while(index<len && s[index] !== ' ' && (!isNaN(Number(s[index])))){
        val=val*10+Number(s[index]);
        console.log(val);
        if(val > 2**31-1 && (sign === 1)) val = 2**31-1;
        if(val > 2**31 && (sign === -1)) val = 2**31;
        index++;
    }
    return val*sign;
};
console.log(myAtoi("4193 with words"))