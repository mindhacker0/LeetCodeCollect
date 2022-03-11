//125. 验证回文串
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
var isPalindrome = function(s) {
    let i = 0,j = s.length-1;
    while(j>i){
        while(j>i && (!/[a-zA-Z0-9]/.test(s[i]))) i++;
        while(j>i && (!/[a-zA-Z0-9]/.test(s[j]))) j--;
        if(j>i){
            if(s[i] === s[j].toLowerCase()||s[i] === s[j].toUpperCase()){
                i++;j--;
            }else{
                return false;
            }
        }   
    }
    return true;
}
console.log(isPalindrome("  "));
console.log(isPalindrome("A man, a plan, a canal: Panama"));