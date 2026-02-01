/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     return x === Number(x.toString().split("").reverse().join(""));
// };

// var isPalindrome = function(x) {
//     if(x < 0 ) return false;
//     const arr = [],prev = x;
//     while(x>0){
//         const token = x%10;
//         arr.push(token);
//         x=Math.floor(x/10);
//     }
//     let next = 0,muti = 1;
//     while(arr.length){
//         const token = arr.pop()
//         next+=token*muti;
//         muti*=10;
//     }
//     return next === prev;
// };

var isPalindrome = function(x) {
    if(x < 0 ) return false;
    const prev = x;
    let next = 0;
    while(x>0){
        const token = x%10;
        x=Math.floor(x/10);
        next*=10;
        next+=token;
    }
    console.log(next)
    return next === prev;
};
// console.log(isPalindrome(12421))
// @lc code=end

