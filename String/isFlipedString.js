//面试题 01.09. 字符串轮转
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
*/
var isFlipedString = function(s1, s2) {
    return ~(s1+s1).indexOf(s2);
};
console.log(isFlipedString("waterbottle","erbottlewat"));