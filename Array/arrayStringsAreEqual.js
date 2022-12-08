//1662. 检查两个字符串数组是否相等
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
*/
var arrayStringsAreEqual = function(word1, word2) {
    let len1 = word1.length,len2 = word2.length;
    let idx1 = 0,idx2 = 0;
    let index1 = 0,index2 = 0;
    while(idx1<len1&&idx2<len2){
        let str1 = word1[idx1];
        let str2 = word2[idx2];
        if(str1[index1]!==str2[index2]) return false;
        index1++;index2++;
        if(index1>=str1.length){idx1++;index1=0;}
        if(index2>=str2.length){idx2++;index2=0;}
    }
    return idx1===len1 && idx2===len2 && index1===0 && index2===0;
};
console.log(arrayStringsAreEqual(["a","ab","c"],["a","a","b","c"]));
console.log(arrayStringsAreEqual(["abc","d","defg"],["abcddef"]));