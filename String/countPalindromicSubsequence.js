//1930. 长度为 3 的不同回文子序列
/**
 * @param {string} s
 * @return {number}
*/
var countPalindromicSubsequence = function(s) {//暴力，超时
    let len = s.length;
    let maxLen = 3;
    let ans = new Set;
    function isPalindrome(str){
        let left = 0,right = str.length-1;
        while(left<right && str[left]===str[right]){left++;right--;}
        return left>=right;
    }
    function trace(index,str){
        if(index === len||str.length===maxLen){
            console.log(str);
            if(str.length===maxLen && isPalindrome(str)) ans.add(str);
            return;
        }
        let prev = str;
        str+=s[index];
        trace(index+1,str);
        str = prev;
        trace(index+1,str);
    }
    trace(0,"");
    return ans.size;
};
console.log(countPalindromicSubsequence("aabca"));