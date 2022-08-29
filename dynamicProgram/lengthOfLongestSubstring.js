//剑指 Offer 48. 最长不含重复字符的子字符串
/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let map = new Map;
    let left = 0,right = 0;
    let result = 0;
    for(let i=0;i<len;i++){
        if(typeof map.get(s[i])!=="undefined"){
           left = Math.max(left,map.get(s[i])+1);
        }
        map.set(s[i],i);right++;
        result = Math.max(result,right-left);
        console.log(left,right,map);
    }
    return result;
};
// console.log(lengthOfLongestSubstring("abcabcdbb"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("ab"));
console.log(lengthOfLongestSubstring("abba"));