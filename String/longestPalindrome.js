//5. 最长回文子串
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {//主要考虑回文串的轴心
    let len = s.length;
    let ans = [];
    for(let i=0;i<len-1;i++){
        let left = i-1,right = i+1;
        let arr = [];
        if(left>=0 && right <=len-1 && s[left] === s[right]){//中心是单个的
            arr = [s[i]];
            while(left>=0 && right <=len-1 && s[left] === s[right]){
                arr.unshift(s[left]);
                arr.push(s[right]);
                left--;
                right++;
            }
            if(arr.length>ans.length) ans = arr;
        }
        left = i;right = i+1;
        if(left>=0 && right <=len-1 && s[left] === s[right]){//中心有两个
            arr = [];
            while(left>=0 && right <=len-1 && s[left] === s[right]){
                arr.unshift(s[left]);
                arr.push(s[right]);
                left--;
                right++;
            }
            if(arr.length>ans.length) ans = arr;
        }
    }
    if(ans.length === 0) ans.push(s[0]);
    return ans.join("");
};
console.log(longestPalindrome("a"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("babad"));