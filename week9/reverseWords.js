//151. 翻转字符串里的单词
/**
 * @param {string} s
 * @return {string}
*/
var reverseWords = function(s) {
   let arr = s.split(/\s+/).filter(v=>v!="");
   console.log(arr);
   return arr.reverse().join(" ");
};
console.log(reverseWords("  hello world  "));