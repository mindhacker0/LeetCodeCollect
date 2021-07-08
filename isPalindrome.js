/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let token = s.split("").filter(val=>val.match(/[a-zA-Z0-9]/g)).map(v=>v.toLowerCase());
    if(token.length === 0) return true;
    let i = 0,j = token.length-1;
    while(j>i){
        if(token[i] === token[j]){
            i++;j--;
        }else{
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("  "));