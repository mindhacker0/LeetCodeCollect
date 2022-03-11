//680. 验证回文字符串 Ⅱ
/**
 * @param {string} s
 * @return {boolean}
*/
var validPalindrome = function(s){
    function isValid(start,end){
        while(start<end){
            if(s[start] === s[end]){
                start++;
                end--;
            }else{
                return false;
            }
        }
        return true;
    }
    let left =0;right = s.length-1;
    while(left<right){
        if(s[left] === s[right]){
            left++;
            right--;
        }else{
            return isValid(left+1,right) || isValid(left,right-1)
        }
    }
    return true;
};
console.log(validPalindrome("abc"));