//58. 最后一个单词的长度
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let arr = s.split(/\s+/);
    let elem = arr.pop();
    if(elem === "") elem = arr.pop();
    return s.length === 0?0:elem.length;
};
console.log(lengthOfLastWord("b   a    "));